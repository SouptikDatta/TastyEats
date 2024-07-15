import React, { useContext, useEffect, useState } from "react";
import logo from '../../src/assets/tasty-eats.png'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsFillBagHeartFill } from "react-icons/bs";

import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

import Salad from '../assets/Categories/Salad.png'
import Soup from '../assets/Categories/Soup.png'
import Pizza from '../assets/Categories/pizza slice.png'
import Dessert from '../assets/Categories/Icecream.png'
import Drink from '../assets/Categories/Iced tea.png'
import AllFoods from '../assets/Categories/All foods.png'

const Navbar = () => {
  const navigate = useNavigate();
  const [isSticky, setSticky] = useState(false);

  const {user} = useContext(AuthContext);

  const [cart, refetch] = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategoryClick = (category) => {
    navigate('/menu', { state: { category: category } });
  };

  const navItems = (
    <>
      <li>
        <Link to='/' className="text-green">Home</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="flex flex-wrap gap-0 w-40">
            <li className="flex flex-col items-center">
              <button onClick={() => handleCategoryClick("all")}>
                <img src={AllFoods} className="w-16" alt="All Foods"/>
                <span>All</span>
              </button>
            </li>
            <li className="flex flex-col items-center">
              <button onClick={() => handleCategoryClick("salad")}>
                <img src={Salad} className="w-16" alt="Salad"/>
                <span>Salad</span>
              </button>
            </li>
            <li className="flex flex-col items-center">
              <button onClick={() => handleCategoryClick("pizza")}>
                <img src={Pizza} className="w-16" alt="Pizza"/>
                <span>Pizza</span>
              </button>
            </li>
            <li className="flex flex-col items-center">
              <button onClick={() => handleCategoryClick("soup")}>
                <img src={Soup} className="w-16" alt="Soup"/>
                <span>Soup</span>
              </button>
            </li>
            <li className="flex flex-col items-center">
              <button onClick={() => handleCategoryClick("dessert")}>
                <img src={Dessert} className="w-16" alt="Dessert"/>
                <span>Dessert</span>
              </button>
            </li>
            <li className="flex flex-col items-center">
              <button onClick={() => handleCategoryClick("drinks")}>
                <img src={Drink} className="w-16" alt="Drinks"/>
                <span>Drinks</span>
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to='/order'>Orders</Link>
      </li>      
      <li>
        <Link to='/offers'>Offers</Link>
      </li>
    </>
  );

  return (
    <header
      className={`bg-slate-50 bg-opacity-75 max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            {/* For mobile button */}
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className='md:w-[35%]' alt="" />
          </Link>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>


        <div className="navbar-end ">

          {/* Favorites icon */}
          <Link to='/favorites'>
            <button className="btn btn-ghost btn-circle hidden lg:flex">
              <BsFillBagHeartFill size={20} color="red"/>
            </button>
          </Link>        

          {/* cart-icon */}
          <Link to="cart-page">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle hidden lg:flex items-center justify-center mr-3"
            >
              <div className="indicator">
                <MdOutlineShoppingCart size={20} color="black"/>
                <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
              </div>
            </label>
          </Link>

          {/* login btn */}
          {
            user? <Profile user={user}/> :  <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white"
            >
            <FaRegUser /> Login
            </button>
          }
          
          <Modal/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;