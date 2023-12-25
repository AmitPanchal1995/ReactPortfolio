
export default function Contact() {
    return (
        <div name='contact' class='contact' className="w-full h-screen bg-[#0a192f] mt-[100px] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/c7b6c041-0d11-4f72-90c8-9e248d71bfda" className="flex  flex-col max-w-[600px] w-full mt-[10%]">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mt-20">Contact</p>
                    <p className="text-gray-300 py-2">// Submit form below or shoot me an email- apnipanchal1995@gmail.com</p>
                </div>
                <input className="bg-[#8e98ba] bg-gradient-to-l from-blue-500 p-2 rounded" type="text" placeholder="Name" name="name" required />
                <input className="my-4 p-2 bg-[#ccd6f6]  bg-gradient-to-l from-blue-500 rounded" type="email" placeholder="Email" name="name" required />
                <textarea className="bg-[#ccd6f6]  bg-gradient-to-l from-blue-500  rounded" name='message' cols='15' rows='5' placeholder=" Message" required></textarea>
                <button className="text-white rounded hover:bg-pink-600 hover:border-pink-600 duration-300 p-3 px-7 py-2 my-4 mx-auto flex items-center  bg-gradient-to-l from-blue-500">Hire Me</button>
            </form>

        </div>
    )
}