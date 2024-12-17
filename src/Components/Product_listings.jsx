import React from 'react'

export default function Product_listings({Name}) {
  return (
    <div>
       <div className="hidden lg:flex lg:flex-1 mx-2 ">
            <a href="#"  className="text-sm font-semibold bg-gray-100 p-[10px_20px] relative overflow-hidden 
         after:content-['']  after:w-0 after:h-[2px] after:bg-red-400 after:absolute 
         after:left-0 after:bottom-0 after:transition-all after:duration-1000 
         hover:after:w-full hover:text-red-400">
           {Name}
            </a>
          </div>
    </div>
  )
}
