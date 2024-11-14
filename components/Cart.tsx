"use client"
import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProceedToBuy from './ProceedToBuy'
import { getCart } from '@/redux/cartSlice';
import { useAppSelector } from '@/lib/supabase/hooks/redux';

// Define the Product type with id as a string
interface Product {
  id: string;  // id is a string
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const cart = useAppSelector(getCart) as Product[]; // Ensure cart is of type Product[]
  let totalPrice = 0;

  cart.forEach((item: Product) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className='w-[80%] mx-auto mt-10'>
      <div className='flex w-full justify-between'>
        <ShoppingCart cart={cart} totalPrice={totalPrice} />
        <ProceedToBuy length={cart.length} totalPrice={totalPrice} />
      </div>
    </div>
  )
}

export default Cart;