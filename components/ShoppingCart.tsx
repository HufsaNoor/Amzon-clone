"use client";
import React from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { clearAllCart, decrementQuantity, incrementQuantity, removeFromTheCart } from '@/redux/cartSlice';
import Subtotal from './shared/Subtotal';

// Define the Product type with id as a string
interface Product {
  id: string;  // id is a string
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  cart: Product[];  // cart is an array of Product[]
  totalPrice: number;
}

const ShoppingCart = ({ cart, totalPrice }: ShoppingCartProps) => {
  const dispatch = useAppDispatch();

  // Format the totalPrice to two decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className='w-[70%]'>
      <div className='flex justify-between items-center border-b border-gray-300 py-5'>
        <h1 className='font-bold text-2xl'>Shopping Cart</h1>
        <h1 className='font-medium'>Price</h1>
      </div>

      {cart.length > 0 ? (
        cart.map((product: Product, index: number) => (
          <div key={index} className='py-4 flex justify-between border-b border-gray-200'>
            <div className='flex'>
              <div>
                <Image src={product.image} width={100} height={100} alt={product.title} />
              </div>
              <div className='ml-4'>
                <h1 className='font-medium'>{product.title}</h1>
                <p className='text-[#007600] font-bold my-1 text-xs'>In Stock</p>
                <h1
                  onClick={() => dispatch(removeFromTheCart(product.id))}
                  className='font-bold text-red-600 cursor-pointer w-fit'
                >
                  REMOVE
                </h1>
                <div className='flex text-xl my-4 font-medium justify-between items-center w-fit bg-gray-100 rounded-md px-5 py-1'>
                  <div
                    onClick={() => product.quantity > 1 && dispatch(decrementQuantity(product))}
                    className='cursor-pointer mr-4'
                  >
                    -
                  </div>
                  <div>{product.quantity}</div>
                  <div
                    onClick={() => dispatch(incrementQuantity(product))}
                    className='cursor-pointer ml-4'
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Format individual product price */}
              <h1 className='font-bold text-xl'>{`$${product.price.toFixed(2)}`}</h1>
              <p className='text-xs py-1'>
                M.R.P: <span className='line-through'>Rs 9,213.62</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center py-5'>Your cart is empty.</p>
      )}

      {/* Subtotal and Clear All in a single row */}
      <div className='flex justify-between items-center mt-4'>
        <h1
          onClick={() => dispatch(clearAllCart())}
          className='text-red-600 font-bold cursor-pointer'
        >
          CLEAR ALL
        </h1>
        <Subtotal left={false} length={cart.length} totalPrice={parseFloat(formattedTotalPrice)} />
      </div>
    </div>
  );
};

export default ShoppingCart;