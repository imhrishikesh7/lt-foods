import React from 'react'

const Cover = () => {
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
            <div className='themeline absolute  top-[50%] left-[10%] translate-y-[-50%] '>
                <h1 className='text-[20px] lg:text-[100px] text-[#995d43] font-[100] m-0 leading-[1]'>
                    Going
                </h1>
                <h1 className='text-[30px] lg:text-[150px] text-[#995d43] font-[100] m-0 leading-[1]'>
                    Beyond
                </h1>
                <div className='mt-5 text-[10px] lg:text-[20px]'>
                    <p>LT Foods Limited</p>
                    <p>Annual Report 2023-24</p>
                </div>
                
            </div>
        </div>
    )
}

export default Cover