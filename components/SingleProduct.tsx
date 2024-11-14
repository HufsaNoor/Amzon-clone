// import Image from 'next/image';
// import React from 'react';
// import Ratings from './shared/Ratings';
// import AddtoCardContainer from './AddtoCardContainer';

// const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
//     if (!singleProduct) {
//         return <div>Loading...</div>; // Show a loading state if singleProduct is null or undefined
//     }

//     return (
//         <div className='w-[80%] mx-auto mt-10'>
//             <div className='flex justify-between'>
//                 <div className='flex'>
//                     <div className='bg-gray-100'>
//                         <Image
//                             className='mix-blend-multiply p-4'
//                             src={singleProduct.image}
//                             width={300}
//                             height={200}
//                             alt={singleProduct.title || 'Product image'}
//                         />
//                     </div>
//                     <div className='mx-4 w-[70%]'>
//                         <h1 className='font-bold text-lg'>{singleProduct.title}</h1>
//                         <p>{singleProduct.description}</p>
//                         <Ratings ratings={singleProduct.rating} />
//                         <h1 className='font-bold'>{`$${singleProduct.price}`}</h1>
//                         <div>
//                             <h1 className='font-bold text-sm'>About this item</h1>
//                             <ul>
//                                 <li>A premium ski and snowboard backpack with the capacity to store, organize, and protect all winter gear.</li>
//                                 <li>Two-way access into the top or front of the bag to efficiently pack and access gear. Back panel door doubles as a standing mat to change in and out of boots in any location. Two spacious side pockets for gloves, outerwear, and accessories.</li>
//                                 <li>Padded, soft-lined compartment for goggles, sunglasses, a phone, or fragile gear. Lockable zippers (locks sold separately). External lash points for additional gear.</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <AddtoCardContainer Products={singleProduct} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleProduct;





import Image from 'next/image';
import React from 'react';
import Ratings from './shared/Ratings';
import AddtoCardContainer from './AddtoCardContainer';

// Define the type for singleProduct
interface Product {
  image: string;
  title: string;
  description: string;
  rating: number; // Assuming it's a number, adjust as necessary
  price: number;
}

// const SingleProduct = ({ singleProduct }: { singleProduct: Product }) => {
//   // Handle loading state if singleProduct is null or undefined
//   if (!singleProduct) {
//     return <div>Loading...</div>;
//   }

type SingleProductProps = {
  singleProduct: Product | null;
};

const SingleProduct: React.FC<SingleProductProps> = ({ singleProduct }) => {
  if (!singleProduct) return <p>Product not found</p>;


  return (
    <div className='w-[80%] mx-auto mt-10'>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='bg-gray-100'>
            <Image
              className='mix-blend-multiply p-4'
              src={singleProduct.image}
              width={300}
              height={200}
              alt={singleProduct.title || 'Product image'}
            />
          </div>
          <div className='mx-4 w-[70%]'>
            <h1 className='font-bold text-lg'>{singleProduct.title}</h1>
            <p>{singleProduct.description}</p>
            <Ratings ratings={singleProduct.rating} />
            <h1 className='font-bold'>{`$${singleProduct.price}`}</h1>
            <div>
              <h1 className='font-bold text-sm'>About this item</h1>
              <ul>
                <li>A premium ski and snowboard backpack with the capacity to store, organize, and protect all winter gear.</li>
                <li>Two-way access into the top or front of the bag to efficiently pack and access gear. Back panel door doubles as a standing mat to change in and out of boots in any location. Two spacious side pockets for gloves, outerwear, and accessories.</li>
                <li>Padded, soft-lined compartment for goggles, sunglasses, a phone, or fragile gear. Lockable zippers (locks sold separately). External lash points for additional gear.</li>
              </ul>
            </div>
          </div>
          <AddtoCardContainer Products={singleProduct} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

