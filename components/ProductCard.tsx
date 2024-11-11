import React from 'react'
import Image from 'next/image'
import Ratings from './shared/Ratings'
import { useRouter } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ Products }: { Products: any }) => {
    const router = useRouter();
    return (
        <div>
            <div className='cursor-pointer' onClick={()=> {router.push(`/product/${Products.id}`)}}  >
                <div className='flex items-center justify-center bg-gray-100 h-[250px] rounded-md overflow-hidden' >
                    <Image className='mix-blend-multiply p-7' src={Products.image} alt={Products.title} width={200} height={200} />
                </div>
                <h1 className='font-bold'>{Products.title}</h1>
                <p>{`${Products.description.substring(0, 50)}...`}</p>
                <Ratings ratings={Products.rating}/>
                <p className='font-bold text-2xl'>{`$${Products.price}`}</p>

            </div>
        </div>
    )
}

export default ProductCard
