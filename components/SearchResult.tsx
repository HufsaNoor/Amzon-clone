import React from 'react'
import ProductCard from './ProductCard'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchResult = ({ filterData }: { filterData: any[] }) => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='mt-10'>
        <div>
          <h1 className='font-bold text-2xl'>Results {filterData.length}</h1>
          <p>Price and other details may vary based on product size and color.</p>
        </div>


        <div className='grid grid-cols-4 gap-2'>
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            filterData?.map((product:any) => {
            return (
               <div key={product.id} >
                   <ProductCard Products={product}/>
               </div>
          )

          })
          
        }

        </div>

      </div>
    </div>
  )
}

export default SearchResult


