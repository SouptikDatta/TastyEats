import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Order = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('access-token');

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const res = await fetch(`https://tastyeats-server.onrender.com//payments?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      return res.json();
    },
  });

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [ratings, setRatings] = useState({});

  const formatDate = (createdAt) => {
    const formattedDate = new Date(createdAt);
    return formattedDate.toLocaleDateString() + ' ' + formattedDate.toLocaleTimeString();
  };

  const handleRatingChange = (itemId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [itemId]: rating
    }));
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const orderId = selectedOrder._id;
    try {
      const response = await fetch('https://tastyeats-server.onrender.com//payments/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ orderId, ratings, generalFeedback: feedback })
      });
      if (response.ok) {
        console.log('Feedback submitted successfully');
        refetch();
        Swal.fire({
          icon: 'success',
          title: 'Thank you for your feedback.',
          text: 'Feedback Submitted successfully!',
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: errorData.error,
          text: 'You cannot submit feedback more than once.',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error,
        text: 'Failed to submit Feedback!',
        confirmButtonText: 'OK'
      });
      console.error('Error:', error);
    }
  };

  return (
    <div className="mt-6 container mx-auto xl:px-24 px-4">
      {/* banner */}
        <div className="py-12 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Track all your <span className="text-green">Orders!</span>
            </h2>
          </div>
        </div>

      {/* Orders */}
      {
        (orders.length > 0) ?
          <div>
            <div className="overflow-x-auto shadow-md">
              <table className="table">
                {/* head */}
                <thead className="bg-green text-white rounded-sm">
                  <tr>
                    <th>#</th>
                    <th>Order Date</th>
                    <th>Transaction Id</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order._id}>
                      <td>{index + 1}</td>
                      <td>{formatDate(order.createdAt)}</td>
                      <td className="font-medium">{order.transactionId}</td>
                      <td>${order.price}</td>
                      <td>{order.status}</td>
                      <td>
                        {order.status === 'Confirmed' ? (
                          <>
                            {selectedOrder && selectedOrder._id === order._id ? (
                              <button className="btn btn-sm w-24 border-2 border-red text-red" onClick={() => setSelectedOrder(null)}>
                                Hide Items
                              </button>
                            ) : (
                              <button className="btn btn-sm w-24 bg-green text-white animate-pulse" onClick={() => setSelectedOrder(order)}>
                                View Items
                              </button>
                            )}
                          </>
                        ) : (
                          <Link to='/contact'>
                            <button className="btn btn-sm border-none text-red bg-transparent">Contact</button>
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Ordered Items and Feedback */}
            {selectedOrder && (
              <div className="mt-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Ordered Items</h3>
                {selectedOrder.itemName.map((name, idx) => (
                  <div key={idx} className="flex flex-row items-center bg-orange-50 gap-4 mb-4 p-2 border rounded-lg">
                    <h4 className="lg:text-lg font-semibold">{name}</h4>
                    <div className='rating rating-sm'>
                      {[...Array(5)].map((_, starIdx) => (
                        <input
                          key={starIdx}
                          type="radio"
                          name={`rating-${selectedOrder.menuItems[idx]}`}
                          className='mask mask-star-2 bg-orange-400'
                          value={starIdx + 1}
                          checked={ratings[selectedOrder.menuItems[idx]] === starIdx + 1}
                          onChange={() => handleRatingChange(selectedOrder.menuItems[idx], starIdx + 1)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
                <textarea
                  className='textarea textarea-success w-full'
                  name="feedback"
                  placeholder='Please give Feedback'
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
                <button className='btn btn-md w-24 btn-outline text-white bg-orange-400 mt-2' onClick={handleFeedbackSubmit}>
                  Submit
                </button>
              </div>
            )}

          </div> 
          
          : 
          
          <div className="text-center mt-20">
            <p>Cart is empty. Please add products.</p>
            <Link to="/menu"><button className="btn bg-green text-white mt-3">Back to Menu</button></Link>
          </div>
      }
    </div>
  );
};

export default Order;
