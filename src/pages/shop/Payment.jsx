import React from 'react'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../hooks/useCart'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const [cart] = useCart() 

  const cartTotalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPrice = parseFloat(cartTotal.toFixed(2));


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28'>
      <Elements stripe={stripePromise} >
        <CheckoutForm cart={cart} quantity={cartTotalQuantity} price={totalPrice} />
      </Elements>
    </div>
  )
}

export default Payment