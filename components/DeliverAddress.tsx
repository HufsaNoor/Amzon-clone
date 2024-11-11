import React from 'react'
import Image from 'next/image';

import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';

const DeliverAddress = () => {
    const cart = useAppSelector(getCart);
    return (
        <div>
            <div>
              

                {/* Delivery Address Section */}
                <div className="w-[70%] mx-auto border-b border-gray-300 py-4">
                    <div className="flex justify-between w-full">
                        <h1 className="font-bold text-lg">1. Delivery Address</h1>
                        <address className="not-italic">
                            2806<br />
                            Jett Lane<br />
                            Riverside, CA<br />
                            California
                        </address>
                    </div>
                </div>

                {/* Items and Delivery Section */}
                <div className="w-[70%] mx-auto border-b border-gray-300 py-4">
                    <div className="flex justify-between w-full">
                        <h1 className="font-bold text-lg">2. Items and Delivery</h1>
                    </div>

                    {/* Cart Items */}
                    {cart.map((product, index) => (
                        <div className="my-4" key={index}>
                            <div className="flex">
                                <Image src={product.image} alt={product.title} width={150} height={150} />
                                <div className="ml-4">
                                    <h1 className="font-bold">{product.title}</h1>
                                    <p className="text-2xl font-bold py-2">{`$${product.price}`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default DeliverAddress
