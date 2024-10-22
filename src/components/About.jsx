import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './About.css';

const About = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <motion.section
            ref={containerRef}
            id="about"
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
        >
            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                         From a telecommunication Engineer to MERN stack developer💻that was a Huge journey , By learning Coding from my college and that made me to learn MERN. Now I can able to do a full stack developer work and it’s been an exhilarating ride!
                    </p>
                    <p className="about-description">
                        My journey has been like upgrading from a Basic Programming skills to full stack developer and more exciting JavaScript frameworks! With hands-on experience in MongoDB, Express.js, React, and Node.js, I’m now all about crafting seamless user experiences and solving complex problems with code.

                    </p>
                    <p className="about-description">
                       painting and crafting was favourite me time work like the way designing  the web page through our own ideas will be same like my hobby. we have  to transform our digital ideas into reality,Let’s code something amazing together! 🚀 
                    </p>
                </motion.div>
                <motion.img
                    src="Meen.png"
                    alt="About Me"
                    className="about-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 1, delay: 0.4 }}
                />
            </div>
        </motion.section>
    );
};

export default About;