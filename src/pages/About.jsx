import React, { useRef, useEffect } from 'react';
import Banner from '../assets/tasty-eats-banner.png';
import { Chrono } from 'react-chrono';
import ChickenDish from '../assets/chicken-dish.jpg'
import DalCurry from '../assets/dal-curry.jpg'
import { FaPizzaSlice } from "react-icons/fa";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";
import Mission from '../assets/tasty-eats-mission.jpg';
import Vission from '../assets/tasty-eats-vission.jpg';
import Journey from '../assets/tasty-eats-journey.png'


const items = [
  {
    title: 'December 2023',
    media: {
      type: 'IMAGE',
      source: {
        url: ChickenDish,
      },
    },
    cardTitle: 'Initial planning',
    cardSubtitle: 'December 2023',
    cardDetailedText: 'In December 2023, the initial planning and conceptualization of TastyEats began, with the ambition to create an exceptional food delivery platform.',
  },
  {
    title: 'January 2024',
    media: {
      source: {
        url: DalCurry,
      },
      type: 'IMAGE'
    },
    cardTitle: 'Future planning',
    cardSubtitle: 'January 2024',
    cardDetailedText: 'In January 2024, future plans were laid out, focusing on UI/UX design and a roadmap for development.',
  },
  {
    title: 'February 2024',
    media: {
      type: 'IMAGE',
      source: {
        url: ChickenDish,
      },
    },
    cardTitle: 'Difficulties in development',
    cardSubtitle: 'February 2024',
    cardDetailedText: 'February 2024 saw some complex ui challenges , as an individual developer of this website, Souptik Datta overcomed all technical hurdles and refined the website designs.',
  },
  {
    title: 'June 2024',
    media: {
      type: 'IMAGE',
      source: {
        url: ChickenDish,
      },
    },
    cardTitle: 'Dynamic Fullstack Website',
    cardSubtitle: 'June 2024',
    cardDetailedText: 'By June 2024, the website had evolved into a dynamic fullstack website with 50+ recipes and menu selction along with admin dashboard, also integrating various backend services and APIs.',
  },
  {
    title: 'July 2024',
    media: {
      type: 'IMAGE',
      source: {
        url: ChickenDish,
      },
    },
    cardTitle: 'Final touch & TastyEats',
    cardSubtitle: 'July 2024',
    cardDetailedText: 'In July 2024, the final touches were applied to make it masterpiece, and the website was prepared for its official launch with the name TastyEats.',
  },
];

const About = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    lazyLoad: true,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 lg:p-8">
      {/* Banner Section */}
      <div className="mt-14 lg:mt-10 bg-inherit relative">
        <img src={Banner} alt="Tasty Eats" className="w-full h-90 object-cover" />
      </div>

         
      {/* Slider Section */}
      <Slider {...settings}>
        <div className="bg-yellow-400 text-black">
            <div className="flex flex-col p-4 md:flex-row items-center md:space-x-8">
              <div className="md:w-1/3 rounded-3xl shadow-black shadow-xl">
                <img src={Mission} alt="Mission" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-2/3 p-10 mt-8 md:mt-0">
                <h2 className="font-oleo text-3xl md:text-4xl font-bold text-center mb-8">Our Mission</h2>
                <p className="font-lato italic text-lg md:text-xl leading-relaxed">
                  <RiDoubleQuotesL size={30}/>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
                </p>
              </div>
            </div>
        </div>

        <div className="bg-orange-400 text-black">
            <div className="flex flex-col p-4 md:flex-row items-center md:space-x-8">
              <div className="md:w-1/3 rounded-3xl shadow-black shadow-xl">
                <img src={Journey} alt="Journey" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-2/3 p-10 mt-8 md:mt-0">
                <h2 className="font-oleo text-3xl md:text-4xl font-bold text-center mb-8">Our Journey</h2>
                <p className="font-lato italic text-lg md:text-xl leading-relaxed">
                  TastyEats started as a small idea in 2024 with the vision of brilliant mind <span className='text-blue-900 font-bold italic'>Souptik Datta</span>. 
                  Over the years, we have grown exponentially, 
                  offering 5+ cuisine , 10+ categories of dishes and serving to thousands of happy customers. 
                  Our journey has been fueled by a passion for food
                  and a commitment to quality. We continue to innovate and expand, always putting our customers first.
                </p>
              </div>
            </div>
        </div>

        <div className="bg-teal-500 text-black">
            <div className="flex flex-col p-4 md:flex-row items-center md:space-x-8">
              <div className="md:w-1/3 rounded-3xl shadow-black shadow-xl">
                <img src={Vission} alt="Vision" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-2/3 p-10 mt-8 md:mt-0">
                <h2 className="font-oleo text-3xl md:text-4xl font-bold text-center mb-8">Our Future Vision</h2>
                <p className="font-lato italic text-lg md:text-xl leading-relaxed">
                At TastyEats, our vision is to revolutionize the dining experience. We aim to create a world where food lovers
                can discover delicious meals effortlessly, delivered right to their doorstep. With a focus on sustainability,
                innovation, and exceptional customer service, we strive to be the leading food delivery platform, providing
                a seamless and delightful experience for our customers.
                </p>
              </div>
            </div>
        </div>

      </Slider>

      {/* Timeline Section */}
      <Chrono items={items} mode="VERTICAL_ALTERNATING" disableToolbarWrapper textOverlay disableToolbar
        cardHeight='350' mediaSettings={{ fit: 'contain' }}
        timelinePointDimension={25}
        theme={{primary: "green",secondary:'transparent',titleColor:'white', titleColorActive:'#00FF40', cardTitleColor:'green',
          cardBgColor: "#000", cardForeColor: "#fff" 
        }}
        fontStyle={{
          title:'sans-serif',
        }}
        fontSizes={{
          cardSubtitle: '0.85rem',
          cardText: '0.8rem',
          cardTitle: '1.2rem',
          title: '2rem',
        }}
      >
        <div className="chrono-icons">
          <FaPizzaSlice size={20} color='white'/>
          <FaPizzaSlice style = {{transform:'rotate(270deg)'}} size={20} color='white'/>
          <FaPizzaSlice size={20} color='white'/>
          <FaPizzaSlice style = {{transform:'rotate(270deg)'}} size={20} color='white'/>
          <FaPizzaSlice size={20} color='white'/>
        </div>
      </Chrono>
    </div>
  );
};

export default About;
