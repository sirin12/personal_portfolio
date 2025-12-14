import React from 'react'
import { RiGraduationCapLine } from '@remixicon/react'
import { RiBriefcaseLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area innerpage-single-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        <div className="col-xl-12 col-md-12 mb-4">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2 className="center">Education</h2>
                                   <Card 
  year={'Oct 2023 - Present'} 
  institution={'International Institute of Technology, Sfax – Tunisia'} 
  title={'Computer Engineering Degree specialized in Software Engineering and Business Intelligence'} 
  description={'Currently pursuing a Computer Engineering degree specializing in Software Engineering and Business Intelligence at the Institut International de Technologie in Sfax, Tunisia. As a third-year student, I am developing advanced skills in full-stack development, data analysis, and software design, while exploring innovative technologies and solutions to tackle real-world problems.'} 
/>

<Card 
  year={'Sep 2019 - Jun 2022'} 
  title={'Higher Institute of Technological Studies, Sfax – Tunisia'} 
  institution={'Institut Supérieur des Études Technologiques, Sfax – Tunisia'} 
  description={'Earned a Bachelor’s degree in Information Technology, specializing in Development of Information Systems from the Higher Institute of Technological Studies in Sfax, Tunisia. The program provided comprehensive training in software development, information systems, and data analysis, equipping me with both theoretical knowledge and practical skills to design and manage modern digital solutions.'} 
/>

<Card 
  year={'2019'} 
  title={'Baccalaureate in Science'} 
  institution={'Lycée Mahmoud Megdich, Sfax – Tunisia'} 
  description={'Completed the Scientific Baccalaureate at Lycée Mahmoud Megdich in Sfax, Tunisia, where I developed strong analytical and problem-solving skills. This early academic training strengthened my understanding of scientific concepts and logical reasoning, forming a solid base for my studies in computer science and software development.'} 

/>

                                </div>
                            </div>
                        </div>
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-12 col-md-12">
                            <div className="single-resume">
                                <h2 className="center">Experience</h2>
                                <div className="experience-list">
                                <CardWork 
                                    year={'Oct 2022 - Aug 2025'} 
                                    title={'Full Stack Developer'} 
                                    technologies={''} 
                                    institution={'Infotech Consulting, Sfax – Tunisia'} 
description={`Engaged in the full lifecycle of multiple high-impact web development projects, delivering scalable, efficient, and user-friendly solutions for diverse organizations. 
Successfully migrated a subscription management system from CodeIgniter 3 to CodeIgniter 4 for a public transport company, ensuring seamless functionality and data integrity without altering the existing architecture. 
Developed the official website for other transport companies, implementing comprehensive features including subscription management, urban and intercity travel operations, and employee management using Laravel and Vue.js. 
Designed and implemented a recruitment management platform with Laravel and Vue.js, streamlining hiring processes and enhancing administrative efficiency. 
Led the migration of a Symfony 4 site to Symfony 6, maintaining full architectural consistency while modernizing the codebase. 
Built a robust web application for transaction management, as well as a project and resource management platform for an architecture firm, enabling optimized planning, monitoring, and reporting. 
Developed a complaint management system to facilitate issue tracking and resolution, improving communication and responsiveness. 
Across all projects, actively contributed from requirement analysis and system modeling to development, unit and integration testing, deployment, and continuous maintenance, collaborating closely with stakeholders and team members to ensure high-quality, reliable, and impactful software solutions. 
Technologies leveraged include Laravel, Vue.js, Flutter, CodeIgniter, and Symfony, demonstrating versatility across modern web development frameworks and tools.`}

                                />

                                <CardWork 
                                    year={'Jan 2022 - Aug 2022'} 
                                    title={'Full Stack Developer'} 
                                    technologies={'Technologies used : Laravel, VueJS,  PostMan, MySQL, Git, Scrum, Docker'} 
                                    institution={'SIFAST, Sfax – Tunisia'} 
description={`Designed and developed a comprehensive test automation platform to streamline and optimize business processes. 
Implemented a wide range of automated tests to enhance system reliability, reduce manual validation time, and ensure consistent performance across modules. 
Integrated and optimized APIs to enable seamless communication between different components, improving overall system efficiency. 
Enhanced the user interface and overall user experience using Vue.js, creating intuitive and responsive workflows for end-users. 
Collaborated closely with development and QA teams to identify bottlenecks, refine testing strategies, and ensure high-quality deliverables. 
Applied best practices in software testing and automation to maintain robust, scalable, and maintainable solutions, contributing to faster deployment cycles and improved operational efficiency.`}
                                />

                                <CardWork 
                                    year={'Jan 2022 - Mar 2022'} 
                                    title={'Community Manager'} 
                                    institution={'Cajewels, Sfax – Tunisia'} 
                                    description={`Created and scheduled engaging social media content. 
                                    Boosted digital presence and community engagement. 
                                    Managed online communities and improved brand interaction. 
                                    Analyzed post performance and adapted marketing strategies. 
                                    Collaborated with marketing teams to align digital campaigns.`} 
                                />

                                <CardWork 
                                    year={'Jan 2021 - Aug 2021'} 
                                    title={'Data Analyst'} 
                                    technologies={'Technologies used : Oracle Database, SQL, Power BI, Talend.'} 
                                    institution={'DIGITAL CLICK, Sfax – Tunisia'} 
description={`Managed, analyzed, and optimized large datasets to enhance the performance and efficiency of information systems. 
Performed complex ETL operations from Oracle Database, transforming and preparing data for analysis while ensuring accuracy and consistency. 
Designed and optimized advanced SQL queries to support in-depth data analysis and reporting requirements. 
Automated reporting processes and created dynamic data visualizations to provide actionable insights for stakeholders. 
Developed interactive dashboards that facilitated data-driven decision-making, improved operational monitoring, and supported strategic planning. 
Collaborated with cross-functional teams to understand business needs, align data solutions, and deliver reliable, scalable, and high-quality analytics applications.`}

                                />
<CardWork 
    year={'Jan 2020 - Feb 2020'} 
    title={'Event Management Web App'} 
    institution={'SIFAST, Sfax – Tunisia'} 
    technologies={'Technologies used: HTML, CSS, JavaScript'} 
    description={`Designed and developed a fully responsive and interactive event management web application using HTML, CSS, and JavaScript, ensuring a seamless experience across devices. 
Created dynamic and modular pages following best practices for maintainable and scalable code. 
Implemented interactive features and animations to enhance usability and user engagement. 
Optimized cross-browser compatibility and responsive layouts for desktop, tablet, and mobile platforms. 
Collaborated closely with the project team to gather requirements, refine functionalities, and deliver a polished, production-ready solution.`}
/>

                                </div>

                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}

                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution , description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiGraduationCapLine />
                </div>
                <div className="content">
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>

                    <span className="years">{year}</span>

                    <p> {description} </p>
                </div>
            </div>
        </SlideUp>
    )
}
const CardWork = ({ year, title, institution, description,technologies }) => {
    const points = description.split('\n').map(point => point.trim()).filter(point => point !== '');

    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBriefcaseLine />
                </div>
                <div className="content">
                    <h4 className="titreWork" >{title}</h4>
                    <span className="company">{institution}</span>
                    <span className="years">{year}</span>

                    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        {points.map((point, index) => (
                            <li key={index}>• {point}</li>
                        ))}
                    </ul>
                    <span className="technologies">{technologies}</span>

                </div>
            </div>
        </SlideUp>
    );
};
