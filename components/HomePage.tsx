"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
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
  }, [getMenClothing, getWomenClothing]);

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
      <div className="w-[90%] mx-auto grid grid-cols-4 gap-2 relative -top-64">
        {Array.isArray(menProduct) && menProduct.map((product) => (
          <div key={product.id}>
            <CategoryWiseProduct product={product} />
          </div>
        ))}
        
        {Array.isArray(womenProduct) && womenProduct.map((product) => (
          <div key={product.id}>
            <CategoryWiseProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
