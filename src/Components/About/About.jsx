import React from 'react'
import Cta from '../Cta/Cta'
import "./About.css"

const About = () => {
    return (
        <div >
            <div className=' bg-gradient-to-r from-[#995d43] to-[#eacd99] md:py-1 py-5 my-[10%] lg:relative' >
                <div className='lg:absolute lg:top-[50%] lg:right-[10%] w-[70%] mx-auto lg:w-[28%] lg:translate-y-[-50%]'>
                    <img src="./home/about1.png" className='w-full' alt="" />
                </div>
                <div className='marginal '>
                    <h1 className='text-white font-[100] text-[40px] md:text-[80px] m-0 leading-[1]'>Going</h1>
                    <h1 className='text-white font-[200] text-[50px] md:text-[100px] m-0 leading-[1]'>Beyond</h1>
                    <p className='mt-10 text-white text-[20px] lg:w-[60%]'>
                        As we reflect on our journey and achievements over the past year, this theme serves as a guiding principle that underscores our commitment to surpassing expectations, breaking boundaries, expanding geographies and elevating consumer experience.
                    </p>
                    <div className='w-fit m-auto md:m-0'>
                        <Cta link='/' col="#fff" stroke="#fff" />
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#fcf7f0] to-[#eacd99] md:py-20 py-5 lg:relative md:flex lg:items-center ">
                <div className="lg:absolute lg:top-[50%] lg:left-[10%] lg:translate-y-[-50%] w-[80%] mx-auto md:w-[28%]">
                    <img src="./home/about3.png" className="w-full" alt="About Image" />
                </div>
                <div className="lg:ml-auto mx-[5%] md:mx-0 lg:w-[60%] lg:pr-[5%] ">
                    <h2 className='text-[#995d43] text-2xl font-semibold mb-4'>About LT Foods</h2>
                    <h1 className="text-[#995d43] font-[100] text-[40px] md:text-[60px] m-0 leading-[1]">Serving Goodness </h1>
                    <h1 className="text-[#995d43] font-[100] text-[40px] md:text-[60px] m-0 leading-[1]">for More Than 70 Years </h1>
                    <p className="mt-5 text-[#71629e] text-[20px] ">
                        LT Foods has built a legacy of excellence, spanning more than seven decades, establishing itself as a leading, global-FMCG Company in the consumer food space, specialising in Basmati and other specialty rice, Organic Foods and Ingredients as well as Ready-to-Eat and Ready-to-Cook segments.
                    </p>
                    <div className="w-fit m-auto md:m-0">
                        <Cta bg="#e9b556" link='/' col="#71629e" stroke="#71629e" />
                    </div>
                </div>
            </div>
            
            <div className='my-[9%] marginal missions'>
                <h2 className='text-[#995d43] text-2xl font-semibold mb-10'>Our Mission</h2>
                <div className="flip-card-container bg-[#fcf7f0] py-10 md:pt-10  relative">
                    <div className='bg-line '></div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className='icon-div'>
                                    <img src="./home/a1.svg" alt="" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <p>Maintain leadership in our flagship rice-based business while striving to deliver the finest and most consistent food experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className='icon-div'>
                                    <img src="./home/a2.svg" alt="" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <p>Diversify and innovate into complementary
                                    food categories based on emerging consumer habits.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className='icon-div'>
                                    <img src="./home/a3.svg" alt="" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <p>
                                    Continuously strive to give back to our community in the best way we can.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className='icon-div'>
                                    <img src="./home/a4.svg" alt="" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <p>
                                    Contribute to the shared growth of our people and deliver superior value
                                    to our stakeholders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About