import React from 'react';
import Dosa from '../assets/Indian Cuisine/Dosa.jpg';
import Biriyani from '../assets/Indian Cuisine/Chicken biriyani.jpg';
import Panipuri from '../assets/Indian Cuisine/panipuri.jpg';
import Samosa from '../assets/Indian Cuisine/samosa.jpg';
import FishCurry from '../assets/Indian Cuisine/Fish curry.jpg';
import ButterNaan from '../assets/Indian Cuisine/Butter naan.jpg';
import PaneerButterMasala from '../assets/Indian Cuisine/Paneer Butter masala.jpg';

import Pizza from '../assets/Italian Cuisine/pizza smoked.jpg';
import Pasta from '../assets/Italian Cuisine/Pasta.jpg';
import Lasagna from '../assets/Italian Cuisine/Lasagna.jpg';
import Risotto from '../assets/Italian Cuisine/Risotto.jpg';
import Tiramisu from '../assets/Italian Cuisine/Tiramisu.jpg';

import FriedRice from '../assets/Chinese Cuisine/Fried rice.jpg';
import Dumplings from '../assets/Chinese Cuisine/Dumplings.jpg';
import SweetAndSourPork from '../assets/Chinese Cuisine/Sweet and Sour pork.jpg';
import KungPaoChicken from '../assets/Chinese Cuisine/Kung Pao Chicken.jpg';
import SpringRolls from '../assets/Chinese Cuisine/Spring rolls.jpg';


const Offers = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="font-lato text-lg lg:text-4xl font-bold rounded-md bg-greenBG text-center text-white p-4 mt-12 mb-2">We Offer World's Best Cuisines</h1>

      {/* Indian Cuisine Carousel */}
      <div className="mt-4 mb-12">
        <div className='flex flex-row items-center mb-4'>
            <h2 className="font-oleo text-2xl lg:text-4xl font-semibold text-green-700">Indian Cuisine</h2>
            <div className="rating ml-4">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" defaultChecked/>
            </div>
        </div>
        <div className="carousel carousel-end rounded-box space-x-4 p-3 bg-slate-200 shadow-xl">
          <div className="carousel-item">
            <img src={Dosa} alt="Dosa" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Biriyani} alt="Biriyani" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Panipuri} alt="Panipuri" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Samosa} alt="Samosa" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={FishCurry} alt="Fish Curry" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={ButterNaan} alt="Butter Naan" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={PaneerButterMasala} alt="Paneer Butter Masala" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Italian Cuisine Carousel */}
      <div className="mb-12">
        <div className='flex flex-row items-center mb-4'>
            <h2 className="font-oleo text-2xl lg:text-4xl font-semibold text-green-700">Italian Cuisine</h2>
            <div className="rating ml-4">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" defaultChecked/>
            </div>
        </div>
        <div className="carousel carousel-end rounded-box space-x-4 p-3 bg-slate-200 shadow-xl">
          <div className="carousel-item">
            <img src={Pizza} alt="Pizza" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Pasta} alt="Pasta" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Lasagna} alt="Lasagna" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Risotto} alt="Risotto" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Tiramisu} alt="Tiramisu" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Chinese Cuisine Carousel */}
      <div>
        <div className='flex flex-row items-center mb-4'>
            <h2 className="font-oleo text-2xl lg:text-4xl font-semibold text-green-700">Chinese Cuisine</h2>
            <div className="rating ml-4">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" defaultChecked/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green" />
            </div>
        </div>
        
        <div className="carousel carousel-end rounded-box space-x-4 p-3 bg-slate-200 shadow-xl">
          <div className="carousel-item">
            <img src={KungPaoChicken} alt="KungPaoChicken" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={SpringRolls} alt="SpringRolls" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={Dumplings} alt="Dumplings" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={SweetAndSourPork} alt="SweetAndSourPork" className="rounded-lg" />
          </div>
          <div className="carousel-item">
            <img src={FriedRice} alt="FriedRice" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
