
export default function Contact() {
    return (
        <div name='contact' class='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/c7b6c041-0d11-4f72-90c8-9e248d71bfda" className="flex  flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">// Submit form below or shoot me an email- shivanshu91rajput@gmail.com</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="name" />
                <textarea className="bg-[#ccd6f6] " name='message' cols='30' rows='10' placeholder=" Message"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Hire Me</button>
            </form>

        </div>
    )
}