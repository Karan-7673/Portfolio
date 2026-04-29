import React from 'react'
import { motion } from "framer-motion";


const technologyData = [
    {
        id: 1,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        name: "HTML5",
        category: "Frontend",
    },
    {
        id: 2,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        name: "CSS3",
        category: "Frontend",
    },
    {
        id: 3,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        name: "JavaScript",
        category: "Frontend",
    },
    {
        id: 4,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React.js",
        category: "Frontend",
    },
    {
        id: 5,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        name: "Redux",
        category: "Frontend",
    },
    {
        id: 6,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        name: "Tailwind CSS",
        category: "Frontend",
    },
    {
        id: 7,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        name: "Sass",
        category: "Frontend",
    },
    {
        id: 8,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        name: "Next.js",
        category: "Frontend",
    },
    // {
    //     id: 9,
    //     image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    //     name: "React Query",
    //     category: "Frontend",
    // },
    // {
    //     id: 10,
    //     image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg",
    //     name: "Framer Motion",
    //     category: "Frontend",
    // },
    {
        id: 11,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        name: "Material UI",
        category: "Frontend",
    },
    {
        id: 23,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        name: "Bootstrap",
        category: "Frontend",
    },
    {
        id: 12,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        name: "React Native",
        category: "Frontend",
    },
    {
        id: 13,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        name: "Node.js",
        category: "Backend",
    },
    {
        id: 14,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        name: "Express.js",
        category: "Backend",
    },
    {
        id: 15,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        name: "Socket.io",
        category: "Backend",
    },
    {
        id: 16,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        name: "MySQL",
        category: "Database",
    },
    {
        id: 17,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        name: "MongoDB",
        category: "Database",
    },
    {
        id: 18,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        name: "Git",
        category: "Tools",
    },
    {
        id: 19,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        name: "GitHub",
        category: "Tools",
    },
    {
        id: 20,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        name: "GitLab",
        category: "Tools",
    },
    {
        id: 21,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        name: "Postman",
        category: "Tools",
    },
    {
        id: 22,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        name: "Vercel",
        category: "Deployment",
    },
    {
        id: 23,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        name: "WordPress",
        category: "CMS",
    },
    {
        id: 24,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        name: "Figma",
        category: "UI/UX",
    },
];

export default function Technology() {
    return (
        <section id="technology" className="py-5">
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="container"
            >
                {/* Heading */}
                <h2 className='title-text mb-4'>Technologies</h2>

                {/* Grid */}
                <div className="row g-4 ">
                    {technologyData.map((tech) => (
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4" key={tech.id}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="technology-card p-3 h-100"
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <img
                                        src={tech.image}
                                        alt={tech.name}
                                        className='technology-image'
                                    />

                                    <div>
                                        <h6 className="mb-0 fw-bold text-primary-custom">
                                            {tech.name}
                                        </h6>
                                        <small className="text-secondary-custom">
                                            {tech.category}
                                        </small>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}