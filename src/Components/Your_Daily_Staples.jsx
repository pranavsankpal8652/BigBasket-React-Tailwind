import axios from 'axios'
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";
import React, { useEffect, useState } from 'react'

export default function Your_Daily_Staples() {
    const [products,setProducts]=useState([])
  
    useEffect(()=>{
     axios.get('https://dummyjson.com/products',{
      params:{
        skip:'40',
        limit:'6'
      }
     })
     .then((success)=>{{
      setProducts(success.data.products)
     }})
     .catch((err)=>{
      console.log(err)
     })
    },[])

  return (
    <div className="bg-white my-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 bg-gray-100">
     
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Daily Staples</h2>
        
         

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white p-3 hover:shadow-xl cursor-pointer">
                         <img
                           alt={product.imageAlt}
                           src={product.thumbnail}
                           className="aspect-square w-full  rounded-md object-center group-hover:opacity-75 lg:aspect-auto lg:h-[120px] bg-gray-300"
                         />
                         <div className="mt-4 flex justify-between px-2">
                           <div>
                             <h5 className="text-sm text-gray-800">
                               <a href={product.href}>
                                 {product.category}
                                 
                               </a>
                             </h5>     
                                                 
                           </div>
                         </div>
                        
                       </div>
          ))}
        </div>
      </div>
    </div>
  )
}
