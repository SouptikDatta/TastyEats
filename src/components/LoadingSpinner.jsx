import React from "react";
import Logo from '../assets/tasty-eats.png'

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={Logo} className='w-1/4 mb-4' alt="TastyEats"/>
      <div className="flex">
        <div>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>
          <span className="loading loading-spinner text-green"></span>

        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;