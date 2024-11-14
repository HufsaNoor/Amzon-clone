// import { NextRequest, NextResponse } from "next/server";
// const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// export async function POST(req: NextRequest, res: NextResponse ){     
//         const body = await req.json();
//         console.log(body);

//         const { items, email } = body;
//         const arrangeditems = items.map((item:any)=>({
//                 price_data:{
//                         currency:'usd',
//                         product_data:{
//                                 name:item.title,
//                                 images:[item.image]
//                         },
//                         unit_amount:Math.floor(item.price*100),
//                 },
//                 quantity:1
//         }))

//         // console.log (items);
//         // console.log(email);
//         const session = await stripe.checkout.sessions.create({
//                 payment_method_types:['card'],
//                 shipping_address_collection:{
//                         allowed_countries:['GB','US','CA']
//                 },
//                 line_items:arrangeditems,
//                 mode:'payment',
//                 success_url:`${process.env.HOST}/success`,
//                 cancel_url:`${process.env.HOST}/checkout`,
//                 metadata :{
//                         email,
//                         images:JSON.stringify( items.map((item:any)=>item.image))
//                 }

//         })

//         return NextResponse.json({
//           id:session.id
//         })
          
// }

   
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';  // Use import statement for Stripe

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
    apiVersion: "2024-10-28.acacia",  // Add apiVersion for better type safety
});

interface CartItem {
    title: string;
    image: string;
    price: number;
}

export async function POST(req: NextRequest) { // Removed 'res' parameter
    const body = await req.json();
    console.log(body);

    const { items, email }: { items: CartItem[]; email: string } = body;

    const arrangedItems = items.map((item: CartItem) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.title,
                images: [item.image],
            },
            unit_amount: Math.floor(item.price * 100), // Stripe accepts price in cents
        },
        quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA'],
        },
        line_items: arrangedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item: CartItem) => item.image)),
        },
    });

    return NextResponse.json({
        id: session.id,
    });
}
