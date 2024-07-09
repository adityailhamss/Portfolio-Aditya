import React, { useEffect, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function Contact(){
    return(
        <div className="py-8 bg-gray-800 min-h-screen px-10" id="contact" data-aos="fade-up">
            <div className="flex flex-col items-center px-10 gap-3">
                <h1 className="text-2xl lg:text-4xl font-bold">CONTACT US</h1>
                <p className="text-sm lg:text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-around py-12">
                <div className="flex items-center mb-5 lg:mb-0">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-row items-center gap-4">
                        <IoLocationOutline size={40}/>
                            <div className="flex flex-col">
                                <h1 className="text-xl lg:text-2xl font-semibold">Address</h1>
                                <p className="text-sm lg:text-base">Jl. Paledang No 38 Kab Bandung</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                        <FiPhone size={40}/>
                            <div className="flex flex-col">
                                <h1 className="text-xl lg:text-2xl font-semibold">Phone</h1>
                                <p className="text-sm lg:text-base">+6281384578837</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                        <MdOutlineEmail size={40}/>
                            <div className="flex flex-col">
                                <h1 className="text-xl lg:text-2xl font-semibold">Email</h1>
                                <p className="text-sm lg:text-base">adityailham193@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-gray-600 w-[300px] lg:w-[500px] rounded-lg px-4">
                    <h1 className="text-center text-2xl mt-2">Send Message</h1>
                    <form class="mb-6">
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                            <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;