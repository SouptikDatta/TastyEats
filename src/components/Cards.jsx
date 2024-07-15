import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import Swal from 'sweetalert2'
import axios from 'axios'
import { FaStar } from "react-icons/fa";

const Cards = ({ item, isFavorite, refetchFavorites,favoriteId }) => {

  const {name , image, price, recipe, _id, averageRating, numberOfRatings } = item;

  const {user} = useContext(AuthContext)
  const token = localStorage.getItem('access-token')

  const navigate = useNavigate();
  const location = useLocation();


  // add to cart handler
  const handleAddToCart = item => {
    // console.log(item);
    if(user && user.email){
        const cartItem = {menuItemId: _id, name, quantity : 1, image, price, email: user.email}

        axios.post('http://localhost:6001/carts', cartItem)
        .then((response) => {
          console.log(response);
          if(response){
            // refetch(); // refetch cart
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Food added on the cart.',
                showConfirmButton: false,
                timer: 1500
              })
          }
        })
        .catch((error) => {
          console.log(error.response);
          const errorMessage = error.response.data.message;
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: `${errorMessage}`,
            showConfirmButton: false,
            timer: 1500
          })
        });
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }
  }

  
  // Function to handle adding to favorites
  const handleAddToFavorites = async () => {
    if (user && user.email) {
      const favoriteItem = { menuItemId: _id, name, image, price, email: user.email };
      try {
        const response = await axios.post('http://localhost:6001/favorites', favoriteItem, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item added to favorites!',
            showConfirmButton: false,
            timer: 1500
          });
          refetchFavorites();
        }
      } catch (error) {
        console.error('Error adding to favorites', error.response?.data);
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: 'Failed to add to favorites',
          title: error.response?.data?.message || 'Unknown error occurred',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } else {
      Swal.fire({
        title: 'Please login to add to favorites',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };


  // Remove from favorites handler
  const handleRemoveFromFavorites = async () => {
    if (user && user.email) {
      try {
        const response = await axios.delete(`http://localhost:6001/favorites/${favoriteId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        if (response) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item removed from favorites!',
            showConfirmButton: false,
            timer: 1500
          });
          refetchFavorites();
        }
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response?.data?.message || 'Unknown error occurred',
          text: 'Failed to remove from favorites' ,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  
  return (
    <div to={`/menu/${item._id}`} className="card bg-orange-50 shadow-lg relative mr-5 md:my-5">
      <div
        className={`rating z-10 gap-1 absolute right-3 mt-3 p-4 bg-green heartStar ${isFavorite ? 'text-orange-600 bg-white border border-x-red' : 'text-white'}`}
        onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
      >
        <FaHeart className={`w-5 h-5 cursor-pointer ${isFavorite ? 'animate-pulse': ''}`} />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img src={item.image} alt="Item" className="rounded-lg mt-3 w-[90%] hover:scale-95 transition-all duration-300 md:h-72" />
        </figure>
      </Link>
      <div className="card-body">
       <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}!</h2></Link>
        <p className="truncate">{recipe}</p>
        
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="font-bold">{averageRating.toFixed(1)}</span>
          <span className="text-gray-600 ml-1">({numberOfRatings} ratings)</span>
        </div>

        <div className="card-actions justify-between items-center mt-2">
          <h4 className="font-semibold text-lg">
            <span className="text-red">$ </span> {item.price}
          </h4>
          <button className="btn bg-green text-white" onClick={() => handleAddToCart(item)}>Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;