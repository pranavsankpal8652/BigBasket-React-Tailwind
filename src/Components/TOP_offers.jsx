

import React, { useEffect, useState } from 'react'
const products=[
  {
    red:'DEALS OF',
    white:'THE WEEK'
  },
  {
    red:'BIG PACK',
    white:'BIGGER DISCOUNTS'
  },
  {
    red:'COMBOS',
    white:'YOU CANT MISS'
  },
  {
    red:'THE',
    white:'₹30 CORNER'
  }
    
]
export default function TOP_offers() {
  
  return (
    <div className="bg-white my-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 bg-gray-100">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Top Offers</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product,index) => (
            <div className='relative bg-white border  hover:shadow-xl h-[100%] pb-[70px] rounded-xl cursor-pointer' key={index}>
              <div className="bg-red-600 h-[100%] p-[50px] pb-[74px] text-left rounded-t-xl text-white text-2xl font-bold">{product.red} </div>
              <div className="bg-white h-[65%] absolute top-[35%] left-3 w-[97%]  px-[45px] font-bold text-2xl">{product.white}
                <div className='text-sm font-normal absolute bottom-2 cursor-pointer'>
                view offers &rarr;
                </div>
             </div>
          </div> 
          ))}
        </div>
      </div>
    </div>
  )
}
