import React from "react";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import logo from '../../src/assets/tasty-eats.png'
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import FooterCook from '../assets/cook-cartoon.png'

const Footer = () => {
  return (
    <div className="divide-y-2 divide-cream">
      <footer className={`w-full font-lato flex bg-green `} >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-14 grid grid-cols-10 gap-x-5 gap-y-8 " >

            {/* footer logo card */}
            <div className="col-span-full xl:col-span-3 relative bg-white rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center shadow-[inset_2px_2px_10px_1px_rgba(0,0,0,0.6)]">
              <Link to='/' className="flex justify-center">
                <img src={logo} width='60%' alt='' />
              </Link>
              <p className="text-center text-black">Specialy made 50+ dishes delivered to our valuable customers.
                Have any query? Contact us here.</p>
              
              {/* Social Links icons */}
              <div className="flex space-x-3 sm:justify-center">
                  <Link to='https://www.twitter.com/'
                    className="w-9 h-9 rounded-full bg-white flex justify-center items-center shadow-lg shadow-slate-500 hover:shadow-black">
                    <FaXTwitter/>
                  </Link>
                  <Link to='https://www.instagram.com/'
                      className="w-9 h-9 rounded-full bg-white flex justify-center items-center shadow-lg shadow-slate-500  hover:shadow-orange-600">
                    <IoLogoInstagram color='red' />
                  </Link>
                  <Link to='https://www.linkedin.com/'
                      className="w-9 h-9 rounded-full bg-white flex justify-center items-center shadow-lg shadow-slate-500 hover:shadow-blue-700">
                    <FaLinkedinIn color="blue" />
                  </Link>
                  <Link to='https://www.youtube.com/'
                    className="w-9 h-9 rounded-full bg-white flex justify-center items-center shadow-lg shadow-slate-500 hover:shadow-red">
                    <PiYoutubeLogoLight size={20} color="red"/>
                  </Link>
              </div>
            </div>

            {/* Get in touch */}
            <div className="block text-center md:mx-4 xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
              <h4 className="text-lg text-gray-900 font-bold mb-9">Get In Touch</h4>
              <ul className="text-gray-900 text-md transition-all duration-500 grid gap-3">
                  <li className="flex items-center gap-2"><MdEmail/>tastyeats@gmail.com</li>
                  <li className="flex items-center gap-2"><MdOutlinePhoneInTalk/>+919875653501</li>
                  <li className="flex items-center gap-2"><FaLocationDot/>5A, Salt Lake, Kolkata India</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
              <h4 className="text-lg text-gray-900 font-bold mb-9 text-center xl:text-left">Quick Links</h4>
              <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
                  <ul className="rounded-lg px-4 py-4 shadow-slate-700 shadow-md text-slate-800 transition-all duration-500 grid gap-2">
                      <li><Link to='/' >Home</Link></li>
                      <li><Link to='/faqs' >FAQs</Link></li>
                      <li><Link to='/about' >Story</Link></li>
                  </ul>
                  <ul className="rounded-lg px-4 py-2 shadow-slate-700 shadow-md text-slate-800 transition-all duration-500 grid gap-3">
                      <li><Link to='/menu' >Menus</Link></li>
                      <li><Link to='/about' >About</Link></li>
                      <li><Link to='/contact' >Contact</Link></li>
                      <li><Link to='/offers' >Offers</Link></li>
                  </ul>
              </div>
            </div>
          
          </div>
        </div>
        <img src={FooterCook} className="hidden lg:block lg:w-1/4" alt="" />
      </footer>

      {/* Copyright footer*/}
      <footer className="footer font-lato bg-greenBG items-center xl:px-24 px-4 py-5 ">
        <aside className="items-center grid-flow-col">
          <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <p className="flex items-center text-white">Made by <span className="font-sign text-lg">Souptik Datta </span>❤️</p>
        <nav className="items-center grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link to='https://www.twitter.com/'>
            <FaXTwitter size={20} color="white"/>
          </Link>
          <Link to='https://www.youtube.com/'>
            <FaYoutube size={20} color="white"/>
          </Link>
          <Link to='https://www.facebook.com/'>
            <FaFacebook size={20} color="white"/>
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;