import React from 'react'
import Image from 'next/image' // Uncommented Image import
import Ratings from './Ratings';
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoryWiseProduct = ({ product }: { product: any }) => { // Changed 'Products' to 'product' for clarity
 const dispatch = useAppDispatch();
 const router = useRouter();
  return (
    <div className='border border-gray-300 p-2 bg-white'>
      <h1 className='font-bold'>{product.category}</h1>
      <div className='mt-2 h-[250px] overflow-hidden flex items-center justify-center'>
        <Image
       
        src={product.image} className='p-6' width={200} height={150} alt={product.title} />
     
      </div>
      <div>
        <h1>
          {product.title}
        </h1>
        <Ratings ratings={product.rating}/>
      </div>
      <div className='my-2'>
        <button
        onClick={()=>{
          dispatch(addToCart(product));
          router.push("/cart");

        }} className='w-full py-2 rounded-md bg-[#FFD814]'>Add to Cart</button>
      </div>
    </div>
  )
}

export default CategoryWiseProduct;



// import React from 'react'
// import Image from 'next/image' // Uncommented Image import
// import Ratings from './Ratings';
// import { useAppDispatch } from '@/lib/supabase/hooks/redux';
// import { addToCart } from '@/redux/cartSlice';
// import { useRouter } from 'next/navigation';
// // interface Product {
// //   id: number;
// //   title: string;
// //   category: string;
// //   image: string;
// //   rating: number;
// //   // Add any other properties your product might have
// // }


// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const CategoryWiseProduct = ({ product }: { product: any }) => { // Changed 'Products' to 'product' for clarity
//  const dispatch = useAppDispatch();
//  const router = useRouter();
//   return (
//     <div className='border border-gray-300 p-2 bg-white'>
//       <h1 className='font-bold'>{product.category}</h1>
//       <div className='mt-2 h-[250px] overflow-hidden flex items-center justify-center'>
//         <Image
       
//         src={product.image} className='p-6' width={200} height={150} alt={product.title} />
     
//       </div>
//       <div>
//         <h1>
//           {product.title}
//         </h1>
//         <Ratings ratings={product.rating}/>
//       </div>
//       <div className='my-2'>
//         <button
//         onClick={()=>{
//           dispatch(addToCart(product));
//           router.push("/cart");

//         }} className='w-full py-2 rounded-md bg-[#FFD814]'>Add to Cart</button>
//       </div>
//     </div>
//   )
// }

// export default CategoryWiseProduct;
