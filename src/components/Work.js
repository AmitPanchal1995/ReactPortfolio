import MovieFinder from "../assests/MovieFinder.png";
import ASUS from "../assests/Asus1.png";
import GYM from '../assests/gympic.png';
import FORM from '../assests/Form.png';
import TODO from '../assests/TODO.png';
import GIT from '../assests/GIT.png'
import EduPIC from '../assests/React-App.png';
import Career from '../assests/career.png';


export default function Work() {
    return (
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Work
                    </p>
                    <p className="py-6 ">// Check out of my recent works</p>
                </div>

                {/* Container */}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid */}




                    <div
                        style={{ backgroundImage: `url(${EduPIC})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
                            <div className="pt-8 text-center">
                                <a href="https://educationpointcom.netlify.app"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/Shivanshu002/EducationPoint"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>








                    <div
                        style={{ backgroundImage: `url(${MovieFinder})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
                            <div className="pt-8 text-center">
                                <a href="https://get-movie-shivanshu.netlify.app"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/Shivanshu002/react-crash"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>




                    <div
                        style={{ backgroundImage: `url(${Career})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effect */}

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider">Project on progress </span>
                            <div className="pt-8 text-center">
                                <a href="https://career-guide-theta.vercel.app/"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/Shivanshu002/career_guide"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>


                    <div
                        style={{ backgroundImage: `url(${GYM})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effect */}

                        <div className="opacity-0 group-hover:opacity-100">

                            <span className="text-2xl font-bold text-white tracking-wider"> Tailwind Css Landing Page </span>
                            <div className="pt-8 text-center">
                                <a href="https://landing-page0002.netlify.app"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/Shivanshu002/gym-landing-page"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>





                    <div
                        style={{ backgroundImage: `url(${FORM})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://rococo-tiramisu-bced21.netlify.app"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/Shivanshu002/FormHandling">  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>





                    <div
                        style={{ backgroundImage: `url(${TODO})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://loquacious-trifle-c6c2bc.netlify.app">  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/Shivanshu002/todolist"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button> </a>
                            </div>
                        </div>
                    </div>




                    <div
                        style={{ backgroundImage: `url(${GIT})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://64e64aac6ecf1102f6896aaa--sweet-wisp-7bbaa1.netlify.app/">  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button> </a>
                                <a href="https://github.com/Shivanshu002/github_search"> <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button> </a>
                            </div>
                        </div>
                    </div>


                    <div
                        style={{ backgroundImage: `url(${ASUS})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover effect */}


                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">Tailwind Css Landing Page</span>

                            <div className="pt-8 text-center">
                                <a href="https://asus-acces-store.netlify.app"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button></a>
                                <a href="https://github.com/Shivanshu002/Asus_Store"><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button></a>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
}
