export default function About() {
    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>

                    <div>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold  ">
                        <p>Hi. I'm Amit, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I'm a skilled frontend developer specializing in React.js.
                            With a passion for crafting engaging and user-centric web experiences,
                            I thrive on creating dynamic and responsive interfaces that seamlessly connect users with digital products.
                            My expertise lies in building interactive and visually appealing applications that deliver exceptional user satisfaction.
                        </p>
                    </div>

                </div>

            </div>
        </div >

    )
}