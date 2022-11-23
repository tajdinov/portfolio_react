import React from 'react'

const About = () => {
  return (
    <div name='about' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className=' flex flex-col justify-center items-center w-full h-full'>
            <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-[#b9c9ff]'>About</p>
                </div>
            </div>
            <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className=' sm:text-right text-4xl font-bold'>
                    <p>Hi, nice to meet you</p>
                </div>
                <div>
                    <p>
                    With years of business experience I have developed into a lateral thinker, a highly proficient team leader and an excellent communicator, capable working with others or individually. 
                    I am eager to use all my previous experiences to help deliver desirable outcomes for any project I undertake. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About