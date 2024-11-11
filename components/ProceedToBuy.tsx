import React from 'react';
import Subtotal from './shared/Subtotal';
import { useRouter } from 'next/navigation';

interface ProceedToBuyProps {
  length: number;
  totalPrice: number;
}

const ProceedToBuy: React.FC<ProceedToBuyProps> = ({ length, totalPrice }) => {
  // Format the totalPrice to 2 decimal places
  const router=useRouter();
  const formattedPrice = totalPrice.toFixed(2);

  return (
    <div className='w-[20%] h-fit border border-gray-300 ml-4 p-4'>
      <p className="mb-4 text-sm"><span className='text-[#007600] font-medium'>
      Your order is eligible for FREE Delivery. 

      </span>
      Choose FREE Delivery option at checkout.
      </p>
      {/* Align Subtotal to the left */}
      <div className="flex flex-col items-start">
        <Subtotal left={true} length={length} totalPrice={parseFloat(formattedPrice)} />
        <button 
        onClick={()=>{
          router.push("/checkout")

        }}
        className='bg-[#FFDB14] w-full py-2 rounded-md shadow-md mt-4'>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default ProceedToBuy;
