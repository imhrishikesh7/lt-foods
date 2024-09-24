import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cover = () => {
    const [animate, setAnimate] = useState(true); // Start with animation true

    const headingVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, // stagger effect
                duration: 0.8, // shorter duration for a snappier feel
                ease: 'easeInOut',
            },
        }),
    };

    // Trigger animation every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false); // Reset animation state
            setTimeout(() => setAnimate(true), 100); // Trigger animation again after a short delay
        }, 3000); // Duration before re-triggering the animation

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className='relative bg-[]' style={{ zIndex: "-1" }}>
            <video autoPlay muted loop
                style={{
                    width: "85%",
                    margin: "auto",
                }}
            >
                <source src="./home/Intro.mp4" />
            </video>
            <div className='themeline absolute top-[50%] left-[10%] translate-y-[-50%]'>
                <motion.h1
                    className='text-[20px] lg:text-[100px] text-[#995d43] font-[100] m-0 leading-[1]'
                    variants={headingVariants}
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    custom={0} // Index for first heading
                >
                    Going
                </motion.h1>
                <motion.h1
                    className='text-[30px] lg:text-[150px] text-[#995d43] font-[100] m-0 leading-[1]'
                    variants={headingVariants}
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    custom={1} // Index for second heading
                >
                    Beyond
                </motion.h1>
                <div className='mt-5 text-[10px] lg:text-[20px]'>
                    <p>LT Foods Limited</p>
                    <p>Annual Report 2023-24</p>
                </div>
            </div>
        </div>
    );
}

export default Cover;
