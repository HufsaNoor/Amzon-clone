import React from 'react'
// import prime from "/prime-logo.png"
import Image from "next/image"
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddtoCardContainer = ({Products}:{Products:any}) => {
  const dispatch=useAppDispatch();
  const router= useRouter();
  return (
    <div className='border border-gray-300 rounded-md h-fit text-sm'>
      <div className='p-4'>

      <Image src="/prime-logo.png" width={40} height={40} alt={"prime"}/>
      </div>
      <div className='p-4'>
        <h1><span className='text-[#147C8F]'>FREE delivery</span>, Thursday, 21 Mrach. <span className='text-[#147C8F]'>Details</span></h1>
        <h1 className='mt-4'>Order within 15 hrs 44 mins. Details</h1>
        <p className='text-[#147C8F my-2] mr'>Deliver to Pakistan</p>
        <button onClick={()=>{
          dispatch(addToCart(Products));
          router.push("/cart")
        }} className='bg-[#FFD814] w-full rounded-full py-2'>Add to cart</button>
        <button className='bg-[#FFA41C] w-full rounded-full py-2 my-2'>Buy Now</button>
      </div>
    </div>
  )
}

export default AddtoCardContainer
