import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import bannerImg from "../assets/Home/banner.png";
import GarlicNoodles from '../assets/Home/Garlic Noodles.png'
import Samosa from '../assets/Home/Samosa.jpg';
import Lasagna from '../assets/Home/Lasagna.jpg';

const Banner = () => {
  const navigate = useNavigate();
  const [animatedText, setAnimatedText] = useState("Flavors");
  const [fadeClass, setFadeClass] = useState("fade-in");

  const [dish, setDish] = useState({
    name: "Garlic Noodles",
    img: GarlicNoodles,
    price: "$18.00",
    rating: 4.5,
  });
  const [dishFadeClass, setDishFadeClass] = useState("fade-in");

  const dishes = [
    { name: "Garlic Noodles", img: GarlicNoodles, price: "$18.00", rating: 4.5 },
    { name: "Samosa", img: Samosa, price: "$2.00", rating: 4.0 },
    { name: "Lasagna", img: Lasagna, price: "$25.00", rating: 4.8 },
  ];

  useEffect(() => {
    const texts = ["Flavors", "Dishes", "Cuisines"];
    let index = 0;
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setAnimatedText(texts[index]);
        setFadeClass("fade-in");

        const dishIndex = (index + 1) % dishes.length;
        setDish(dishes[dishIndex]);
        setDishFadeClass("fade-in");

      }, 1000); // Match the duration of the fade-out animation
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 ">
      <div className="py-6 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/*Banner img */}
        <div className="md:w-1/2 flex flex-row items-center">
          <img src={bannerImg} className="w-[80%]" alt="TastyEats Chef" />


          {/* Dish Card */}
          <div className={`card card-side font-lato bg-base-100 absolute ml-32 lg:ml-80 mt-64 shadow-xl ${dishFadeClass}`}>
            <figure>
              <img src={dish.img} alt={dish.name} className="w-[85%] rounded-2xl"/>
            </figure>
            <div className="card-body p-2 pr-4">
              <h5 className="lg:text-lg text-sm font-semibold">{dish.name}</h5>
              <div className="rating rating-xs lg:rating-sm">
                {[...Array(5)].map((star, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating-6"
                    className={`mask mask-star-2 ${index < dish.rating ? 'bg-orange-500' : 'bg-orange-400'}`}
                    readOnly
                    checked={index < dish.rating}
                  />
                ))}
              </div>
              <p className="lg:text-md text-sm text-red font-semibold">{dish.price}</p>
            </div>
          </div>


        </div>

        {/* Banner texts */}
        <div className="font-lato md:w-1/2 px-4 space-y-7">
          <h2 className="text-black md:text-5xl text-3xl font-bold md:leading-snug leading-snug">
            Experience the Symphony of Exquisite <span className={`text-green font-oleo ${fadeClass}`}>{animatedText}</span>
          </h2>
          <p className="text-[#4A4A4A] text-lg md:text-xl">
            Discover a world where culinary art meets unmatched taste and elegance.
          </p>
          <button onClick={() => navigate('/menu')} className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">Explore Menu</button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;