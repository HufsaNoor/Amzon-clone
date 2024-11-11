// "use client"
// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { useSupabase } from '@/lib/supabase/hooks/useSupabase'
// import CategoyWiseProduct from './shared/CategoyWiseProduct'
// import Link from "next/link";
// const HomePage = () => {
//   const {
//     menProduct,
//     womenProduct,
//     getMenClothing,
//     getWomenClothing
//   } = useSupabase();
// useEffect(()=>{
//   getMenClothing();
//   getWomenClothing();
// },[]
// )


//   return (
//     <div>
//       <Image src={"https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg"} width={10000} height={1000} alt="banner"/>
//     <div>
// {

//     menProduct.map((Products:any)=>{
//       return(
//       <Link href={`/Products/${Products.id}`}>
//         <CategoyWiseProduct Products={Products}/>
//       </Link>
//       )
//     })
//   }
//     </div>
//     </div>
    
//   )
// }

// export default HomePage
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import Link from 'next/link';
import CategoryWiseProduct from './shared/CategoryWiseProduct';


const HomePage = () => {
  const {
    menProduct,
    womenProduct,
    getMenClothing,
    getWomenClothing
  } = useSupabase();

  useEffect(() => {
    getMenClothing();
    getWomenClothing();
  }, []);

  return (
    <div>
      <Image 
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
        src="https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg" 
        width={10000} 
        height={1000} 
        alt="banner" 
      />
      <div className="w-[80%] mx-auto grid grid-cols-4 gap-2 relative -top-64">
        {Array.isArray(menProduct) && menProduct.map((product) => (
          <div href={`/Products/${product.id}`} key={product.id}>
            <CategoryWiseProduct product={product} />
          </div>
        ))}
        
        {Array.isArray(womenProduct) && womenProduct.map((product) => (
          <div href={`/Products/${product.id}`} key={product.id}>
            <CategoryWiseProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
