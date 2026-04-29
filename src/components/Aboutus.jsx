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
                    <p className=''>
                        I’m a Web Developer who builds fast, responsive, and user-focused web applications. With experience in developing real-world platforms like marketing automation tools, I focus on creating clean UI, scalable components, and seamless user experiences. I enjoy solving problems through code and helping turn ideas into meaningful digital products.
                    </p>
                    <p>
                        I specialize in building complex UI systems like email template builders, dynamic editors, and scalable frontend architectures using React and TypeScript. I focus on performance, clean UI, and cross-platform compatibility (including email clients like Gmail & Outlook).
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
