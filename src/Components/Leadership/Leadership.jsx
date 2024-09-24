import React from 'react'
import Cta from '../Cta/Cta'
import { motion } from 'framer-motion';
import "./Leadership.css"
const Leadership = () => {
    return (
        <div className='marginal'>
            <motion.h2 className='text-[#995d43] text-2xl font-semibold mb-5'
                initial={{ opacity: 0, x: -100 }} // Left for even, right for odd
                whileInView={{ opacity: 1, x: 0 }} // Bring to original position
                transition={{ duration: 0.5 }} // Staggered delay
                viewport={{ once: false }}
            >
                Leadership Message
            </motion.h2>
            <motion.h1 className="text-[#995d43] font-[100] text-[40px] md:text-[60px] mb-4 leading-[1]"
                initial={{ opacity: 0, x: -100 }} // Left for even, right for odd
                whileInView={{ opacity: 1, x: 0 }} // Bring to original position
                transition={{ duration: 0.5, delay: 0.2 }} // Staggered delay
                viewport={{ once: false }}
            >
                Moving Ahead
                with Prudence and Agility
            </motion.h1>
            <div className='w-full py-4 relative'>
                <motion.div className='bg-line2 '
                    initial={{ opacity: 0, scale: 0.8 }} // Left for even, right for odd
                    whileInView={{ opacity: 1, scale: 1 }} // Bring to original position
                    transition={{ duration: 0.5 }} // Staggered delay
                    viewport={{ once: false }}
                > </motion.div>
                <motion.img src="./home/leaders.png" className='md:w-[80%]  m-auto' alt=""
                    initial={{ opacity: 0, y: 100 }} // Left for even, right for odd
                    whileInView={{ opacity: 1, y: 0 }} // Bring to original position
                    transition={{ duration: 0.5, delay: 0.2 }} // Staggered delay
                    viewport={{ once: false }}
                />
                <div className="w-fit mt-10 mx-auto">
                    <Cta bg="#dccdfa" link='/leadership-message' col="#000" stroke="#71629e" />
                </div>
            </div>
        </div>
    )
}

export default Leadership