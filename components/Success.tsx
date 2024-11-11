
// "use client";

// import { useAppSelector } from '@/lib/supabase/hooks/redux';
// import { getCart } from '@/redux/cartSlice';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Success = () => {
//     const cart = useAppSelector(getCart);

//     return (
//         <div className="absolute top-0 w-full bg-white py-12">
//             <div className="mx-auto w-[70%]">
//                 <h1>Thank you for your order.</h1>
//                 <div>
//                     <h1 className="font-bold py-3 underline">Order Details</h1>
//                     {cart.map((product: any) => (
//                         <div className="flex" key={product.id}>
//                             <div>
//                                 <Image src={product.image} alt={product.title} width={100} height={100} />
//                                 <div className="ml-5 font-bold">
//                                     <h1>{product.title}</h1>
//                                     <h1>{product.price}</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div>
//                     <Link href="/" className="bg-[#FFD814] px-4 py-1 rounded-md my-5">
//                         Buy more products
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Success;
"use client";

import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Success = () => {
    const cart = useAppSelector(getCart);

    return (
        <div className="absolute top-0 w-full bg-gray-100 py-16">
            <div className="mx-auto w-[60%] bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Thank you for your order!</h1>
                
                <div className="border-t border-gray-300 pt-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h2>
                    <div className="space-y-4">
                        {cart.map((product: any) => (
                            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm" key={product.id}>
                                <Image src={product.image} alt={product.title} width={80} height={80} className="rounded-md" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
                                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/" className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-200 shadow-lg">
                            Buy more products
                       
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
