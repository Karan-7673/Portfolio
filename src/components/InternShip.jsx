import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';

const handleRedirect = (url) => {
    window.open(url, "_blank");
};

export default function InternShip() {
    const internShipExperience = [
        {
            role: "Software Intern",
            company: "Noitavoone",
            duration: "Oct 2023 - Sep 2024",
            description: "Completed an 11-month internship focused on front-end development using React and modern UI frameworks. Contributed to live projects, gained hands-on experience in integrating APIs, maintaining responsive designs, and collaborating in agile development teams.",
            skills: ["React.js", "JavaScript", "HTML5 and CSS3", "Bootstrap 5", "Tailwind CSS", "Git", "GitHub"],
            link: "https://noitavonne.in/"
        }

    ];

    return (
        <section id='work-experience'>
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <h2 className='headline-text'>Internship</h2>
                {internShipExperience.map((experience, index) => (
                    <div key={index} className="experience-card d-flex justify-content-between mb-3">
                        <div className='experience-year-div'>
                            <span className='text-muted experience-year'>{experience.duration}</span>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className='d-flex flex-column experience-content'>
                                <span className='fw-bolder'>{experience.role}</span>
                                <small
                                    onClick={() => handleRedirect(experience.link)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {experience.company}
                                    <ArrowUpRight size={16} />
                                </small>
                                <span className='text-muted experience-year-small'>{experience.duration}</span>
                                <p>{experience.description}</p>
                                <ul className='d-flex list-unstyled flex-wrap'>
                                    {experience.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className='skill-tag bg-body-secondary'>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
            <hr />
        </section>
    );
}
