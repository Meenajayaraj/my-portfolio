import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'OTP-MANAGAER',
        description: `OTP-Manager by using react , nodejs , express and bootstrap for the backend I used MongoDb for the data od user to get otp and verification process,it is an authentication Process by usin MERN stack.`,
        link: 'https://github.com/Meenajayaraj/Capstone-OTP-MANAGER-frontend.git' ,// Add actual link if available
        image:'/otp.png'
    },
    {
        id: 2,
        title: 'TO-DO App',
        description: "this is To-Do app by using react The frontend is built with React, a JavaScript library for building user interfaces ,HTML and CSS Basic markup and styling are done,Bootstrap is used for styling and layout components,JavaScript Logic for todo management and interaction is implemented..",
        link: 'https://github.com/Meenajayaraj/task-14-todo.git', 
        image:'/download.png'
    },
 {
        id: 3,
        title: 'Online-jewlery shoping cart',
     description: "shoping cart for online jewlery order without connecting dB by using react node js bootstrap and styling i have created shoping cart",
     link: 'https://github.com/Meenajayaraj/task-15.git',
     image:'/OIP.png'
    }

    // Add more projects as needed
];

const Projects = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <motion.section
            ref={containerRef}
            id="projects"
            className="projects-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
        >
            <h2 className="projects-title">My Projects</h2>
            <motion.div
                className="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {projects.map(project => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                        transition={{ duration: 0.5, delay: project.id * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="project-button">Visit Page</button>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;