'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine, RiH3 } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/image.jpeg"} alt="About Me" />
                                <h2>HADIJI Sirine</h2>
                                <p>I am a Full Stack Developer.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link target='_blank' href="https://www.threads.com/@sirin_hadiji"><RiTwitterXLine size={20} /></Link></li>
                                        <li><Link target='_blank' href="https://www.linkedin.com/in/sirine-hadiji-3438a9242/"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link target='_blank' href="https://github.com/sirin12"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello,</p>
                                <h2>
                                    I’am Sirine HADIJI, a Full-Stack Web Developer.
                                </h2>

<p>
I’m a skilled software developer with strong experience in JavaScript and expertise in frameworks like React, Node.js, and Three.js. I’m currently expanding my knowledge in DevOps and automation while exploring the exciting applications of AI in research. A quick learner and collaborative team player, I work closely with clients to craft efficient, scalable, and user-friendly solutions that tackle real-world challenges and deliver meaningful impact.
</p>
                                <h5>
                                    My work is guided by purpose: to build systems that matter.
                                </h5>



                                {/* <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div> */}
                                <div className="hero-btns">
<div className="hero-btns">
  <a href="/resume.pdf" download className="theme-btn">
    Download CV <i><RiDownloadLine size={16} /></i>
  </a>
</div>                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero