import { HiArrowNarrowRight } from 'react-icons/hi';
// import { useState } from 'react';
import { Link } from 'react-scroll';



function Home() {

    // const [work, setWork] = useState(false)
    // const handleClick = () => setWork(!work)

    return (
        <div name='home' className=' w-full h-screen bg-[#0a192f]'>

            {/* container  */}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shivanshu Rajput</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm frontend developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I'm focused on building responsive full-stack web applications.</p>
                <div >
                    <Link to="work" smooth={true} duration={500}>

                        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>

                            View Work

                            <span className='hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Home;