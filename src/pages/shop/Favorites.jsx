import React, { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
import useFavorites from '../../hooks/useFavorites'
import { useLocation, useNavigate } from 'react-router-dom';
import ChefFood from '../../assets/Chef foods.png'

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [favorites, refetch] = useFavorites();
  const token = localStorage.getItem('access-token')


  const handleAddToCart = async (item) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: item._id,
        name: item.name,
        quantity: 1,
        image: item.image,
        price: item.price,
        email: user.email,
      };

      try {
        const response = await fetch('https://tastyeats-server.onrender.com/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cartItem),
        });

        if (!response.ok) {
          throw new Error('Failed to add to cart');
        }

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Food added to the cart.',
          showConfirmButton: false,
          timer: 1500,
        });

        // Refetch favorites after adding to cart
        refetch();
      } catch (error) {
        console.error('Error adding to cart', error.message);
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Error adding to cart',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!',
      }).then((result) => {
        if (result.isConfirmed) {
          // Handle navigation logic to login page
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };



  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      {favorites.length === 0 ? (
        <div className="flex flex-col mt-16 items-center justify-center">
          <img src={ChefFood} className='w-[40%]' alt='Favorites'/>
          <p className="text-2xl text-red font-semibold mb-4">OOPS! No favorite items found!</p>
          <button 
            className="btn bg-green text-white"
            onClick={() => navigate('/menu')}
          >
            Go to Menu
          </button>
        </div>
      ) : (
        <>
          <div className="text-center mt-4">
            <p className="subtitle">Favorites</p>
            <h2 className="title">Your Favorite Items</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {favorites.map((item) => (
              <div key={item._id} className="card bg-orange-50 shadow-lg relative mr-5 md:my-5">
                <img src={item.image} alt={item.name} className="rounded-lg mt-3 w-full h-64 object-cover" />
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="truncate">{item.recipe}</p>
                  <div className="card-actions flex justify-between items-center">
                    <h4 className="font-semibold text-lg">
                      <span className="text-lg text-red">$ </span> {item.price}
                    </h4>
                    <button className="btn bg-green text-white" onClick={() => handleAddToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>   
      )}
    </div>
  );
};

export default Favorites;
