import React from 'react'
import Cta from '../Cta/Cta'
import "./Leadership.css"
const Leadership = () => {
    return (
        <div className='marginal'>
            <h2 className='text-[#995d43] text-2xl font-semibold mb-5'>Leadership Message</h2>
            <h1 className="text-[#995d43] font-[100] text-[40px] md:text-[60px] mb-4 leading-[1]">Moving Ahead
                with Prudence and Agility</h1>
            <div className='w-full py-4 relative'>
                <div className='bg-line2 '> </div>
                <img src="./home/leaders.png" className='md:w-[80%]  m-auto' alt="" />
                <div className="w-fit m-auto">
                    <Cta bg="#dccdfa" link='/' col="#000" stroke="#71629e" />
                </div>
            </div>
        </div>
    )
}

export default Leadership