import React from 'react';
import axios from "axios";
import { supabase } from '@/lib/supabase/products';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { loadStripe } from '@stripe/stripe-js';

// console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY);
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const OrderSummary = () => {


  const cart = useAppSelector(getCart)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const totalPrice = cart.reduce((acc: number, item: any) => acc + item.price, 0);
  const deliveryPrice = 10; // Assuming a fixed delivery price, update as needed
  const promotionPrice = 0; // Apply your discount logic here
  const totalAmount = totalPrice + deliveryPrice - promotionPrice;



const createStripeSession = async () => {
  const {data:{user}} = await supabase.auth.getUser();
  const stripe = await stripePromise;
// 
  const checkoutSession = await axios.post("/api/checkout-sessions",{
    items:cart,
    email:user?.email
  });
  console.log(checkoutSession);

  //redirect to checkout session
  const result = await stripe?.redirectToCheckout({
    sessionId:checkoutSession.data.id,
  })
if(result?.error){
  console.log(result.error.message);
}


}


  return (
    <div className='border border-gray p-4 mt-5 h-fit'>
      <div>
        <h1 className='font-bold'>Order Summary</h1>
        <div className='text-xs'>
          <div className='flex items-center justify-between'>
            <p>Items:</p>
            <p>{cart.length}</p> {/* Dynamically show the number of items */}
          </div>
          <div className='flex items-center justify-between'>
            <p>Delivery:</p>
            <p>{deliveryPrice}</p> {/* Dynamically show delivery price */}
          </div>
          <div className='flex items-center justify-between'>
            <p>Total:</p>
            <p>{totalPrice}</p> {/* Dynamically show total price */}
          </div>
          <div className='flex items-center justify-between'>
            <p>Promotion Applied:</p>
            <p>{promotionPrice}</p> {/* Dynamically show promotion applied */}
          </div>
          <div className='flex text-2xl font-bold text-[#810404] py-2 border-t border-b border-gr  my-1'>
            <h1>Order Total: </h1>
            <h1>{totalAmount}</h1> {/* Dynamically show total amount */}
          </div>
        </div>
        <button
          onClick={createStripeSession}
          className='bg-[#FFD814] w-full rounded-md px-4 py-1 my-3'>
          Place Your Order
        </button>
      </div>
    </div>
  );
}

export default OrderSummary; 


// import React from 'react';
// import axios from "axios";
// import { supabase } from '@/lib/supabase/products';
// import { useAppSelector } from '@/lib/supabase/hooks/redux';
// import { getCart } from '@/redux/cartSlice';
// import { loadStripe } from '@stripe/stripe-js';

// interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   // Add any other properties that are present in a cart item, such as `image`, `category`, etc.
// }

// // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY);
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

// const OrderSummary = () => {


//   const cart = useAppSelector(getCart)

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const totalPrice = cart.reduce((acc: number, item: CartItem) => acc + item.price, 0);
//   const deliveryPrice = 10; // Assuming a fixed delivery price, update as needed
//   const promotionPrice = 0; // Apply your discount logic here
//   const totalAmount = totalPrice + deliveryPrice - promotionPrice;



// const createStripeSession = async () => {
//   const {data:{user}} = await supabase.auth.getUser();
//   const stripe = await stripePromise;
// // 
//   const checkoutSession = await axios.post("/api/checkout-sessions",{
//     items:cart,
//     email:user?.email
//   });
//   console.log(checkoutSession);

//   //redirect to checkout session
//   const result = await stripe?.redirectToCheckout({
//     sessionId:checkoutSession.data.id,
//   })
// if(result?.error){
//   console.log(result.error.message);
// }


// }


//   return (
//     <div className='border border-gray p-4 mt-5 h-fit'>
//       <div>
//         <h1 className='font-bold'>Order Summary</h1>
//         <div className='text-xs'>
//           <div className='flex items-center justify-between'>
//             <p>Items:</p>
//             <p>{cart.length}</p> {/* Dynamically show the number of items */}
//           </div>
//           <div className='flex items-center justify-between'>
//             <p>Delivery:</p>
//             <p>{deliveryPrice}</p> {/* Dynamically show delivery price */}
//           </div>
//           <div className='flex items-center justify-between'>
//             <p>Total:</p>
//             <p>{totalPrice}</p> {/* Dynamically show total price */}
//           </div>
//           <div className='flex items-center justify-between'>
//             <p>Promotion Applied:</p>
//             <p>{promotionPrice}</p> {/* Dynamically show promotion applied */}
//           </div>
//           <div className='flex text-2xl font-bold text-[#810404] py-2 border-t border-b border-gr  my-1'>
//             <h1>Order Total: </h1>
//             <h1>{totalAmount}</h1> {/* Dynamically show total amount */}
//           </div>
//         </div>
//         <button
//           onClick={createStripeSession}
//           className='bg-[#FFD814] w-full rounded-md px-4 py-1 my-3'>
//           Place Your Order
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OrderSummary;
