import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-v-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:pl-[100px]'>
            <p className='text-[#b9c9ff]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Roman Tazhdynov</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                I'm a full stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                Aspiring full-stack web developer utilising marketing and business background to build a more intuitive user experience on the web.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b9c9ff] hover:border-[b9c9ff]'>My Work 
                <span className=' group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home