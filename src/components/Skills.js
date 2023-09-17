import React from "react";
import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import JAVASCRIPT from '../assests/javascript.png';
import REACT from '../assests/react.png';
// import NODEJS from '../assests/nodejs.png';
import TAILWIND from '../assests/tailwindCss.png';
import VERSION from '../assests/version.png';
import API from '../assests/api.png';
import Responsiv from '../assests/responsive.png';


export default function Skills() {
    return (
        <div name='skills' className="bg-[#0a192f] text-gray-300 h-screen">
            {/* Container.. */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>


                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                        <p className="my-4">CSS</p>
                    </div>


                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={JAVASCRIPT} alt="JAVASCRIPT icon" />
                        <p className="my-4">JAVASCRIPT</p>
                    </div>


                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={REACT} alt="REACT icon" />
                        <p className="my-4">REACT JS</p>
                    </div>


                    {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={NODEJS} alt="NODEJS icon" />
                        <p className="my-4">NODEJS</p>
                    </div> */}


                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={TAILWIND} alt="TAILWIND icon" />
                        <p className="my-4">TAILWIND CSS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={VERSION} alt="VERSION CONTROLLING icon" />
                        <p className="my-4">VERSION CONTROLLING</p>
                    </div>


                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={API} alt="VERSION CONTROLLING icon" />
                        <p className="my-4">REST API</p>
                    </div>


                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-full">
                        <img className="w-20 mx-auto" src={Responsiv} alt="VERSION CONTROLLING icon" />
                        <p className="my-4">MOBILE RESPONSIVE</p>
                    </div>

                </div>

            </div>

        </div>
    )
}