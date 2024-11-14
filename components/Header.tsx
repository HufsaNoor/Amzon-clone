"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { supabase } from '@/lib/supabase/products';

const itemList = [
  "All",
  "Fresh",
  "MX Player",
  "Sell",
  "Best Sellers",
  "Today's Deals",
  "Mobiles",
  "Electronics",
  "Home & Kitchen",
  "Prime",
  "Customer Service",
  "New Releases",
  "Fashion"
]

type User = {
  identities?: Array<{ identity_data: { user_name: string } }> | undefined;
  // other properties of User
};

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const cart = useAppSelector(getCart);

  const searchHandler = () => {
    router.push(`/search/${query}`);
  }

  useEffect(() => {
    const getUserData = async () => {
      const { data: { user: supabaseUser } } = await supabase.auth.getUser();
      
      // Transform user data to match the expected structure in User type
      const transformedUser: User | null = supabaseUser
        ? {
            ...supabaseUser,
            identities: supabaseUser.identities?.map(identity => ({
              identity_data: {
                user_name: identity.identity_data?.user_name || "Guest",
              },
            })),
          }
        : null;

      setUser(transformedUser);
    }
    
    getUserData();
  }, []);

  console.log(user);

  return (
    <>
      <div className='bg-[#131921] text-white py-1'>
        <div className='flex items-center justify-between w-[90%] mx-auto'>
          <Link href={'/'} className='w-[10%]'>
            <Image src="/amazon-logo-2.webp" alt={'logo'} width={150} height={150} />
          </Link>
          <div className='flex items-center w-[60%]'>
            <input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text" 
              className='w-full p-2 rounded-l-md text-black' 
              placeholder="Search Amazon.in" 
            />
            <div 
              onClick={searchHandler} 
              className='bg-[#FEBD69] p-2 cursor-pointer hover:bg-[#ffad43] rounded-r-md'>
              <IoSearch size={"24px"} className='text-black' />
            </div>
          </div>
          <div className='flex items-center justify-around w-[20%]'>
            <div 
              onClick={() => {
                router.push("/signin");
              }} 
              className='cursor-pointer'>
              <h1 className='text-xs hover-underline '>
                {`${user ? user.identities?.[0].identity_data.user_name : "Signin"}`}
              </h1>
              <h1 className='font-medium text-sm'> Account & Lists</h1>
            </div>
            <div className='cursor-pointer'>
              <p className='text-xs'>Returns</p>
              <h1 className='font-medium text-sm'>& Orders</h1>
            </div>
            <Link href={"/cart"} className='cursor-pointer'>
              <p className='relative top-3 left-5'>{cart?.length || 0}</p>
              <div className='flex'>
                <div className='cursor-pointer'>
                  <FiShoppingCart size={"40px"} />
                </div>
                <h1 className='mt-4'>Cart</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-[#232F3E] w-full text-white p-2 flex justify-between items-center'>
        <div>
          {
            itemList.map((link, idx) => (
              <Link href={`/${link}`} key={idx} className='mx-2 hover:border border border-transparent hover:border-white p-2'>
                {link}
              </Link>
            ))
          }
        </div>
        <div className='mr-5'>
          <h1 
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) console.error("Sign out error:", error);
              router.push("/signin");
            }}
            className='text-[#FEDB69] font-bold cursor-pointer hover:underline'>
            Sign Out
          </h1>
        </div>
      </div>
    </>
  )
}

export default Header;
