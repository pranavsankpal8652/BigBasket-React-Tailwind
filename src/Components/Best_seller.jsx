import axios from 'axios'
import Slider from "react-slick";

import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

import React, { useEffect, useState } from 'react'
import Best_Seller_inner from './Best_Seller_inner';

export default function Best_seller() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500, 
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          infinite: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  const [products,setProducts]=useState([])
  const [scrollLeft,setScrollLeft]=useState(false)
  const [scrollRight,setScrollRight]=useState(true)

  useEffect(()=>{
   axios.get('https://dummyjson.com/products',{
    params:{
      skip:'15',
      limit:'12'
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
    <div className="bg-white my-10 relative" id='sliderseller'>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 bg-gray-100" >
        <div className='flex justify-between'>
           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Best Seller</h2>
           <div className='flex items-center gap-5'>
           <h3 className="text-lg underline cursor-pointer font-bold tracking-tight text-gray-700 pe-[150px]">View All</h3>
           {/* <HiChevronLeft className={`bg-gray-200 text-2xl ${scrollLeft?'cursor-pointer':'cursor-not-allowed'} `} onClick={scrollTOLeft} /> */}

           {/* <HiChevronRight className={`bg-gray-200 text-2xl ${scrollRight?'cursor-pointer':'cursor-not-allowed'} `}  onClick={scrollTORight}/> */}

           </div>
        </div>
           
        <div className="mt-6 ">
        <Slider {...settings}>
        
          {products.map((product) => (
            <Best_Seller_inner product={product} key={product.id}/>
          ))}
        
        </Slider>
        </div>
       
      </div>
    </div>
  )
}
