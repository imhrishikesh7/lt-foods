import React from 'react'
import { useEffect, useState } from "react";
import Cta from '../Cta/Cta'
import "./About.css"
import { motion} from 'framer-motion';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const section = document.getElementById("mission-section");
        if (section) {
            const rect = section.getBoundingClientRect();
            // Check if section is visible in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        // Listen to the scroll event
        window.addEventListener("scroll", handleScroll);
        // Cleanup listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div >
            <motion.div className=' bg-gradient-to-r from-[#995d43] to-[#eacd99] md:py-1 py-5 my-[10%] lg:relative'
                initial={{ opacity: 0, }} // Left for even, right for odd
                whileInView={{ opacity: 1, }} // Bring to original position
                transition={{ duration: 0.7 }} // Staggered delay
                viewport={{ once: false }} // Optional: Set to true if you want the animation to trigger only once

            >
                <div className='lg:absolute lg:top-[50%] lg:right-[10%] w-[70%] mx-auto lg:w-[28%] lg:translate-y-[-50%]'>
                    <motion.img src="./home/about1.png" className='w-full' alt=""
                        initial={{ opacity: 0, scale: 0.6 }} // Left for even, right for odd
                        whileInView={{ opacity: 1, scale: 1 }} // Bring to original position
                        transition={{ duration: 0.5 }} // Staggered delay
                        viewport={{ once: false }}
                    />
                </div>
                <motion.div className='marginal'
                    initial={{ opacity: 0, x: -100 }} // Left for even, right for odd
                    whileInView={{ opacity: 1, x: 0 }} // Bring to original position
                    transition={{ duration: 0.7 }} // Staggered delay
                    viewport={{ once: false }} // Optional: Set to true if you want the animation to trigger only once      
                >

                    <h1 className='text-white font-[100] text-[40px] md:text-[80px] m-0 leading-[1]'>Going</h1>
                    <h1 className='text-white font-[200] text-[50px] md:text-[100px] m-0 leading-[1]'>Beyond</h1>
                    <p className='mt-10 text-white text-[20px] lg:w-[60%]'>
                        As we reflect on our journey and achievements over the past year, this theme serves as a guiding principle that underscores our commitment to surpassing expectations, breaking boundaries, expanding geographies and elevating consumer experience.
                    </p>
                </motion.div>
            </motion.div>
            <div className="bg-gradient-to-r from-[#fcf7f0] to-[#eacd99] md:py-20 py-5 lg:relative md:flex lg:items-center ">
                <div className="lg:absolute lg:top-[50%] lg:left-[10%] lg:translate-y-[-50%] w-[80%] mx-auto md:w-[28%]">
                    <motion.img src="./home/about3.png" className="w-full" alt="About Image"
                        initial={{ opacity: 0, scale: 0.6 }} // Left for even, right for odd
                        whileInView={{ opacity: 1, scale: 1 }} // Bring to original position
                        transition={{ duration: 0.5, delay: 0.2 }} // Staggered delay
                        viewport={{ once: false }} // Optional: Set to true if you want the animation to trigger only once

                    />
                </div>
                <motion.div className="lg:ml-auto mx-[5%] md:mx-0 lg:w-[60%] lg:pr-[5%]"
                    initial={{ opacity: 0, x: 100 }} // Left for even, right for odd
                    whileInView={{ opacity: 1, x: 0 }} // Bring to original position
                    transition={{ duration: 0.7 }} // Staggered delay
                    viewport={{ once: false }}
                >
                    <h2 className='text-[#995d43] text-2xl font-semibold mb-4'>About LT Foods</h2>
                    <h1 className="text-[#995d43] font-[100] text-[40px] md:text-[60px] m-0 leading-[1]">Serving Goodness </h1>
                    <h1 className="text-[#995d43] font-[100] text-[40px] md:text-[60px] m-0 leading-[1]">for More Than 70 Years </h1>
                    <p className="mt-5 text-[#71629e] text-[20px] ">
                        LT Foods has built a legacy of excellence, spanning more than seven decades, establishing itself as a leading, global-FMCG Company in the consumer food space, specialising in Basmati and other specialty rice, Organic Foods and Ingredients as well as Ready-to-Eat and Ready-to-Cook segments.
                    </p>
                    <div className="w-fit mx-auto md:mt-10 md:mx-0">
                        <Cta bg="#e9b556" link='/about' col="#71629e" stroke="#71629e" />
                    </div>
                </motion.div>
            </div>

            <div id="mission-section" className="mt-[5%] marginal missions">
                <h2 className="text-[#995d43] text-2xl font-semibold mb-10">Our Mission</h2>
                <motion.div
                    className="flip-card-container bg-[#fcf7f0] py-10 md:pt-10 relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate when visible
                    transition={{ duration: 0.5, staggerChildren: 0.2, ease: "easeOut" }}
                >
                    <div className="bg-line"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Flip Card 1 */}
                        <motion.div
                            className="flip-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="icon-div">
                                        <img src="./home/a1.svg" alt="icon 1" />
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <p>Maintain leadership in our flagship rice-based business while striving to deliver the finest and most consistent food experiences.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Flip Card 2 */}
                        <motion.div
                            className="flip-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="icon-div">
                                        <img src="./home/a2.svg" alt="icon 2" />
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <p>Diversify and innovate into complementary food categories based on emerging consumer habits.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Flip Card 3 */}
                        <motion.div
                            className="flip-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="icon-div">
                                        <img src="./home/a3.svg" alt="icon 3" />
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <p>Continuously strive to give back to our community in the best way we can.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Flip Card 4 */}
                        <motion.div
                            className="flip-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="icon-div">
                                        <img src="./home/a4.svg" alt="icon 4" />
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <p>Contribute to the shared growth of our people and deliver superior value to our stakeholders.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About