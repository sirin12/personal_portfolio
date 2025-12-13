import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import Link from 'next/link'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-3">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/personal_portfolio/images/about/profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-9">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’am Sirine HADIJI.
                                </h2>
<p>
I am a <strong>third-year Computer Engineering student</strong> specializing in 
<strong> Software Engineering and Business Intelligence</strong>, with 
<strong> three years of hands-on experience</strong> gained alongside my studies. 
By combining a strong academic background with practical exposure, I have developed solid skills in 
<strong> full-stack web development</strong>, <strong> test automation</strong>, and 
<strong> data analysis</strong>. I enjoy building <strong>efficient, scalable, and user-centered applications </strong> 
while continuously enhancing my technical expertise. Curious, proactive, and driven by 
<strong> continuous learning and innovation</strong>, I actively explore new technologies and modern development practices 
to solve real-world problems. I value <strong> team collaboration, adaptability, and problem-solving</strong>, 
and I strive to deliver digital solutions that create meaningful impact.
</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn" >Get In touch<i> <RiMailSendLine size={16} /> </i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery