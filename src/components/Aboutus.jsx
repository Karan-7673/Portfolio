import React from 'react'
import { motion } from "framer-motion";
export default function Aboutus() {
    return (
        <section id="aboutUs">
            <motion.div
                initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className='headline-text'>About</h2>
                <div className="about-content">
                    <p className='text-muted'>
                        Passionate React Developer with hands-on experience in crafting responsive, user-centric web applications. Proficient in modern frontend technologies including React.js, Tailwind CSS, Bootstrap, and API integration. Known for delivering clean UI, scalable components, and seamless user experiences. A proactive learner and effective collaborator, committed to continuous improvement and building meaningful digital products.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
