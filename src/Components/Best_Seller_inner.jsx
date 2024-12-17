import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";
export default function Best_Seller_inner({product}) {
  return (
    <div  className="group relative bg-white p-3 shadow-lg mx-4 ">
              <div className="absolute top-3 left-3 p-[4px] bg-green-400 rounded-lg">
                {`${product.discountPercentage}%off`}
              </div>
              <img
                alt={product.imageAlt}
                src={product.thumbnail}
                className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h5 className="text-sm text-gray-500">
                    <a href={product.href}>
                      {product.brand?product.brand:product.category}
                      
                    </a>
                    
                  </h5>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                     
                      {product.title}
                      
                    </a>
                    
                  </h3>
                  <h5 className="text-sm text-gray-700 p-1 bg-green-200 max-w-fit my-4 ">
                    <a href={product.href} className='flex items-center'>
                      {product.rating}<FaStar />

                      
                    </a>
                    
                  </h5>
                  
                </div>
              </div>
              <hr></hr>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
              <div className='grid grid-cols-4 items-center mt-[20px] py-[30px] justify-center'>
                <div className='group/parent relative'>
                  <IoSaveOutline  className='border border-gray-400 p-1 text-[30px] col-span-auto  text-black cursor-pointer hover:bg-red-200 ' />
                  <div className='absolute top-[100%] hidden bg-black text-gray-300 p-2 rounded-lg group-hover/parent:block  text-nowrap'>Save for Later</div>
                </div>
              <div className='col-span-3'>
                <button className='text-red-500 border border-red-500 w-[100%] font-bold hover:text-white hover:bg-red-500'>Add</button>
              </div>
              </div>
            </div>
  )
}
