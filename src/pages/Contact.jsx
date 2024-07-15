import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import ContactImg from '../assets/Contact cartoon.png'
import ContactBanner from '../assets/Contact banner.avif'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.VITE_EMAILJS_SERVICE_ID,
            process.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.VITE_EMAILJS_USER_ID
        ).then(
            () => {
                console.log('SUCCESS!');
                // notify();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    // const notify = () => toast.success('Thank you for messaging!');

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container mt-10 px-6 py-12 mx-auto">
                    <div className="text-center">
                        <p className="font-medium text-green dark:text-blue-400">Contact us</p>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">We’d love to hear from you</h1>
                    </div>

                    <img className="object-cover w-full h-64 mt-6 rounded-lg lg:h-96" src={ContactBanner} alt=""/>

                    <div className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-3 sm:grid-cols-2">
                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-2 text-green rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <HiOutlineMail size={20} />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                            <p className="mt-2 text-sm text-green dark:text-blue-400">tastyeats@gmail.com</p>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-2 text-green rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <HiOutlineLocationMarker size={20} />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ.</p>
                            <p className="mt-2 text-sm text-green dark:text-blue-400">5A, Salt Lake, Kolkata India</p>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                            <span className="inline-block p-2 text-green rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <IoCallOutline size={20} />
                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                            <p className="mt-2 text-sm text-green dark:text-blue-400">+91 9875653501</p>
                        </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-semibold text-center text-green mt-8">Send us a Message</h2>

                    <div className="font-lato flex flex-col lg:flex-row  mt-12">
                        <img src={ContactImg} alt='' className='lg:w-1/3 mb-2 mx-auto' />
                        <form ref={form} onSubmit={sendEmail} className="lg:w-1/2 outline outline-1 outline-green  bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                <input type="text" id="name" name="user_name" className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                                <input type="email" id="email" name="user_email" className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Message</label>
                                <textarea id="message" name="message" rows="5" className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-6 py-2 font-semibold outline outline-greenBG outline-2 text-greenBG bg-green-600 rounded-md hover:bg-greenBG hover:text-white">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
