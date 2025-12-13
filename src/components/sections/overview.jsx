'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { RiArrowRightUpLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
import { overviewData } from '@/utlits/fackData/overviewData';
import Image from 'next/image';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    overviewData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })
    // ------ filter unique category

    const filteredProjects = category === 'All' ? overviewData : overviewData.filter(image => image.category === category);


    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Overview</h2>

<p>
From building intuitive and engaging web experiences as a <strong>Web Developer</strong>, to tackling complex challenges as a <strong>Tech Problem Solver</strong>, I thrive on transforming ideas into reality. I experiment with cutting-edge technologies in AI as an <strong>AI Experimenter</strong>, while applying data-driven insights to craft effective strategies as a <strong>Data-Driven Thinker</strong>.<br/> My work blends creativity, technology, and analytical thinking to deliver solutions that are both innovative and practical.
</p>


                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map(({ category, id, src, title }) => <Card key={id} id={id} category={category} src={src} title={title} animationClass={animationClass} />)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio


const Card = ({ category, title, src, animationClass, id }) => {
    return (
        <div className={`col-lg-3 col-md-6 item branding game ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <Image  unoptimized width={383} height={249} sizes='100vw' style={{width:"100%", height:"auto"}} src={src} alt="Project" />
                    </div>
                    <div className="project-content">
                        <h3>{title}</h3>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}