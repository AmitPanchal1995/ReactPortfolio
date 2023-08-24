
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import namelogo from "../assests/namelogo.png";
import { useState } from 'react';
import { Link } from 'react-scroll';


function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={namelogo} alt='Logo Image' className='w-16 rounded-[80%]' />
            </div>

            {/* This is menu bar links  */}

            <ul className='hidden md:flex '>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-4 text-3xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home</Link></li>

                <li className='py-4 text-3xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link></li>

                <li className='py-4 text-3xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-4 text-3xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>

                <li className='py-4 text-3xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-300 bg-blue-500 p-2 ' href='https://www.linkedin.com/in/shivanshu-rajput-a134a5226/'>
                            Linkedin<FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-300 p-2 bg-[#333333] ' href='https://github.com/Shivanshu002'>
                            Github<FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-300 bg-[#6fc2b0] p-2 ' href='mailto:shivanshu91rajput@gmail.com'>
                            Email<HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-300 bg-[#565f69] p-2 ' href='https://drive.google.com/file/d/1i5z61hL9ybeZsGjPRx9Oy-i8gSHr1AtP/view?usp=drive_link'>
                            Resume<BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar;