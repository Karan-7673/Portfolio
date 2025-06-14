import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/images/new_avatar.png";

export default function Hero() {
    const texts = [
        "Hi, I'm",
        "नमस्कार, अहं",
        "Привет, я",
    ];


    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero">
            <div className="hero-container mt-5">
                <div className="align-items-center d-flex gap-1 hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="hero-title">
                            <motion.span
                                key={currentTextIndex}
                                className="title-text display-4"
                                initial={{ width: 0 }}
                                animate={{
                                    width: "100%",
                                    transition: {
                                        duration: 2,
                                        ease: "easeOut",
                                    },
                                }}
                                exit={{ opacity: 0 }}
                                style={{
                                    display: "inline-block",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                }}
                            >
                                {texts[currentTextIndex]}
                            </motion.span>
                            <br />
                            <span className="title-text display-4">Karan</span>
                            <span className="wavy-hand title-text display-4">👋</span>
                        </div>
                        <div className="hero-description mt-1">
                            <span className="description-text text-muted">
                                Full Stack Developer | Crafting scalable, user-centric web solutions.
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <span className="image-container">
                            <img className="profile-image undraggable" alt="My Image" src={HeroImage} />
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
