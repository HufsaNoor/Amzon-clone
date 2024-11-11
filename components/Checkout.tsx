"use client";
import React from 'react';
import DeliverAddress from './DeliverAddress';
import OrderSummary from './OrderSummary';
import amazonlogo from "../public/amazon-logo.png";
import { FaLock } from "react-icons/fa";
import Image from 'next/image';

const Checkout = () => {
    return (
        <div className="absolute top-0 w-full p-10 bg-white">



            <div className="flex w-[70%] mx-auto items-center justify-between border-b border-gray-400 pb-5">
                <div>

                    <Image src={amazonlogo} alt="amazon-logo" width={150} height={150} />
                </div>
                <div>

                    <h1 className="font-bold text-2xl text-center flex-1">Checkout</h1>
                </div>
                <div>

                    <FaLock size="30px" className="text-gray-400" />
                </div>
            </div>


            <div className="flex justify-between w-[70%] mx-auto">


                <DeliverAddress />



                <OrderSummary />

            </div>

        </div>
    );
};

export default Checkout;
