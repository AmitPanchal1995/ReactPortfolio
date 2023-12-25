import { HiArrowNarrowRight } from 'react-icons/hi';
// import { useState } from 'react';
import { Link } from 'react-scroll';
import Resume from '../assests/resu.jpeg';



function Home() {

    

    return (
        <div name='home' className=' w-full h-screen bg-[#0a192f]'>

            {/* container  */}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Amit Panchal</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm frontend developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I'm focused on building responsive full-stack web applications.</p>
                <div className='flex gap-4' >
                    <Link to="work" smooth={true} duration={500}>

                        <button className=' bg-gradient-to-l from-blue-500 text-white rounded px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>

                            View Work

                            <span className='hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                    <a href={Resume}>
                        <button className=' bg-gradient-to-l from-blue-500 text-white rounded px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 md:hidden'>Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;