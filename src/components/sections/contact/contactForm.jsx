'use client'; // Add this at the very top of your file
import React, { useState } from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '@/utlits/animations/slideUp';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        emailjs.sendForm(
            'service_fns0ee9',     // replace with your Service ID
            'template_swx1ymf',    // replace with your Template ID
            form,
            'SSsZwQ6Ch2URyJAlW'      // replace with your Public Key
        ).then(
            (result) => {
                console.log(result.text);
                setStatus('success'); // success message
                form.reset();
            },
            (error) => {
                console.log(error.text);
                setStatus('error');   // error message
            }
        );
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-control" placeholder="Steve Milner" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="hello@websitename.com" required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message" required></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Me Message <i><RiMailLine size={15} /></i>
                                    </button>
                                    {status === 'success' && <p className="text-success mt-2">Message sent successfully!</p>}
                                    {status === 'error' && <p className="text-danger mt-2">Failed to send message. Please try again.</p>}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    );
};

export default ContactForm;
