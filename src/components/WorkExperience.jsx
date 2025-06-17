import React from 'react';
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
// import StreamDeck from "../assets/images/project/StreamDeck.png";
// import CarbonExchnage from "../assets/images/project/CarbonExchange.png";
// import QrImage from "../assets/images/project/QR.png";
// import DiverseImage from "../assets/images/project/DiverseServices.png";
// import Bluemoose from "../assets/images/project/BlueMoose.png";
import DJLBoogieEnt from "../assets/images/project/Djboogieent.png";
import IGTBOK from "../assets/images/project/IGTBOK.png";
import Podcast from "../assets/images/project/Podcast.png";
import AxiomWebControl from "../assets/images/project/Axiom_web_control.png";
import TeamLeader from '../assets/images/icons/TeamLeader';
import Fancybox from './lib/Fancybox';

const workExperiences = [
    {
        role: "React Developer",
        company: "Noitavonne",
        duration: "Oct 2024 - Mar 2025",
        description: "Worked as a React Developer on dynamic, responsive web applications with a focus on clean UI design and efficient state management. Integrated REST APIs, improved component reusability, and collaborated closely with backend developers to deliver high-performance solutions aligned with client requirements.",
        skills: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap", "REST API", "Git", "GitHub"],
        link: "https://noitavonne.in/"
    }
];


const projects = [
    // {
    //     title: "StreamDeck & Tv",
    //     description: "StreamDeck is a streaming management tool used for broadcasting and controlling live streams, integrating with TV.silocloud.io. It enables users to program and schedule content using EPG (Electronic Program Guide), providing a seamless streaming experience.",
    //     skills: ["Team Leader", "React Js", "Laravel 10", "MySql", "FFmpeg", "RTMP", "WebRTC", "Node Js", "Socket.io"],
    //     image: StreamDeck,
    //     link: "https://streamdeck.silocloud.io/"
    // },
    // {
    //     title: "CarbonExchange",
    //     description: "Alexander’s Carbon Exchange is a blockchain-based platform enabling transparent carbon credit trading, connecting producers and buyers to promote sustainable practices and combat climate change for a greener future.",
    //     skills: ["Html5 and CSS3", "JavaScript", "jQuery", "MySql", "MapBox API", "REGRID API"],
    //     image: CarbonExchnage,
    //     link: "https://carbonexchange.ai"
    // },
    // {
    //     title: "QR Code Generator",
    //     description: "The QR Code Generator allows users to create both static and dynamic QR codes for various purposes, enhancing digital interaction and accessibility. It provides an easy-to-use platform for generating QR codes that can be used for websites, and other applications.",
    //     skills: ["Team Leader", "React Js", "Laravel 10", "MySql"],
    //     image: QrImage,
    //     link: "https://qr.silocloud.io/"
    // },
    // {
    //     title: "DiverseServices",
    //     description: "Diverse Multi Services, LLC offers comprehensive services, including tax preparation, bookkeeping, printing, and notary support, serving the DFW Metroplex and all 50 states to meet diverse community needs.",
    //     skills: ["Team Leader", "React Js", "Laravel 10", "MySql"],
    //     image: DiverseImage,
    //     link: "https://diverseservices.com"
    // },
    // {
    //     title: "BlueMoose API",
    //     description: "Creating an API for bluemoose Tv that will generate subtitles of English Video and translate them using deep translate.",
    //     skills: ["Team Leader", "React Js", "Laravel 10", "MySql", "Flask", "Python", "Open AI"],
    //     image: Bluemoose,
    //     link: "https://centera.live/"
    // },
    {
        title: "DJLBoogieEnt",
        description: "A portfolio and booking platform for DJ services, offering an interactive user interface for event management, media showcase, and contact integration. Focused on responsive design and performance optimization.",
        skills: ["React.js", "Bootstrap", "Responsive Design"],
        image: DJLBoogieEnt,
        link: "https://djlboogieent.com/"
    },
    {
        title: "IGTBOK",
        description: "A meaningful initiative aimed at helping victims of human trafficking through technology-driven resources. Built to offer information, support networks, and secure communication tools.",
        skills: ["React.js", "Bootstrap", "REST API", "Websocket", "Express.js", "Mongodb", "MapBox API"],
        image: IGTBOK,
        link: "https://peaceful-lumiere.174-143-48-203.plesk.page/"
    },
    {
        title: "Podcast Platform",
        description: "A full-featured podcast streaming platform similar to Spotify. It includes user authentication, audio streaming, search functionality, and a mobile-friendly UI.",
        skills: ["React.js", "Express.js", "JavaScript", "Bootstrap", "MongoDB"],
        image: Podcast,
        link: "https://podcast.silocloud.io/"
    },
    {
        title: "Axiom Web Control",
        description: "A dynamic platform for managing web services and internal workflows. Developed user interfaces for real-time controls and analytics, improving efficiency for service teams.",
        skills: ["React.js", "Express.js", "REST APIs", "Tailwind CSS", "DashLite"],
        image: AxiomWebControl,
        link: "https://axiomwebcontrol.com/"
    },

];

// Function to handle redirection
const handleRedirect = (url) => {
    window.open(url, "_blank");
};

export default function WorkExperience() {
    return (
        <section id='work-experience'>
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <h2 className='headline-text'>Work Experience</h2>
                {workExperiences.map((experience, index) => (
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

            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="divider mb-2">Company Projects</div>
                {projects.map((project, index) => (
                    <div key={index} className='d-flex d-flex-column-on-small justify-content-between align-items-center mb-3'>
                        <div className='project-image'>
                            <Fancybox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <a data-fancybox="gallery" href={project.image} >
                                    <img src={project.image} alt={project.title} className='border border-warning border-2 rounded-1' loading='lazy' />
                                </a>
                            </Fancybox>
                        </div>
                        <div>
                            <div className='d-flex flex-column project-content'>
                                <span className='fw-bolder'>{project.title}</span>
                                <small
                                    onClick={() => handleRedirect(project.link)}
                                    style={{ cursor: "pointer" }}
                                >
                                    Visit Here
                                    <ArrowUpRight size={16} />
                                </small>
                                <p>{project.description}</p>
                                <ul className='d-flex list-unstyled flex-wrap'>
                                    {project.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className='skill-tag bg-body-secondary'>
                                            {skill === "Team Leader" && <span className='me-1'><TeamLeader /></span>}
                                            {skill}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                ))}
                <hr />
            </motion.div>
        </section>
    );
}
