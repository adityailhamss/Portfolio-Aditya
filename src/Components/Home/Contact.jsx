import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Contact(){
    return(
        <div className="py-8 bg-gray-800 min-h-screen px-10" id="contact" data-aos="fade-up">
            <div className="flex flex-col items-center px-10 gap-3">
                <h1 className="text-2xl lg:text-4xl font-bold">CONTACT US</h1>
                <p className="text-sm lg:text-base text-center">Have a question or want to get in touch? Feel free to reach out to us! Whether you're looking for support, partnership opportunities, or just want to say hello, we'd love to hear from you. We aim to respond to all inquiries promptly. Your feedback is valuable to us!</p>
            </div>
            <div className="flex justify-center py-12">
                <div className="flex items-center">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col items-center gap-4">
                            <IoLocationOutline size={40}/>
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl lg:text-2xl font-semibold">Address</h1>
                                <p className="text-sm lg:text-base text-center">Jl. Paledang No 38 Kab Bandung</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <FiPhone size={40}/>
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl lg:text-2xl font-semibold">Phone</h1>
                                <p className="text-sm lg:text-base">+6285974264783</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <MdOutlineEmail size={40}/>
                            <div className="flex flex-col items-center">
                                <h1 className="text-xl lg:text-2xl font-semibold">Email</h1>
                                <p className="text-sm lg:text-base">adityailham193@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;