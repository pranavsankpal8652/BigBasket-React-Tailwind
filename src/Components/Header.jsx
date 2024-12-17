'use client'
import React, { useEffect, useState } from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Product_listings from './Product_listings';

const products = [
  'Exotic Fruits & V..','Tea','Ghee','Nandini','Fresh Vegetables'
]


const Categories =[
  {
    id: '1',
    name: 'Electronics',
    subcategories: [
      {
        name: 'Mobile Phones',
        products: ['Smartphones', 'Feature Phones', 'Refurbished Phones']
      },
      {
        name: 'Laptops & Computers',
        products: ['Gaming Laptops', 'Business Laptops', 'Monitors']
      },
      {
        name: 'Accessories',
        products: ['Chargers', 'USB Cables', 'Power Banks']
      }
    ]
  },
  {
    id: '2',
    name: 'Home Appliances',
    subcategories: [
      {
        name: 'Kitchen Appliances',
        products: ['Microwave Ovens', 'Blenders', 'Toasters']
      },
      {
        name: 'Cooling & Heating',
        products: ['Air Conditioners', 'Fans', 'Room Heaters']
      },
      {
        name: 'Cleaning Appliances',
        products: ['Vacuum Cleaners', 'Dishwashers', 'Water Purifiers']
      }
    ]
  },
  {
    id: '3',
    name: 'Groceries',
    subcategories: [
      {
        name: 'Dairy Products',
        products: ['Milk', 'Cheese', 'Yogurt']
      },
      {
        name: 'Snacks',
        products: ['Chips', 'Biscuits', 'Popcorn']
      },
      {
        name: 'Beverages',
        products: ['Tea', 'Coffee', 'Juices']
      }
    ]
  },
  {
    id: '4',
    name: 'Fashion',
    subcategories: [
      {
        name: 'Men\'s Clothing',
        products: ['T-Shirts', 'Jeans', 'Formal Shirts']
      },
      {
        name: 'Women\'s Clothing',
        products: ['Dresses', 'Sarees', 'Tops']
      },
      {
        name: 'Footwear',
        products: ['Sports Shoes', 'Sandals', 'Formal Shoes']
      }
    ]
  },
  {
    id: '5',
    name: 'Health & Wellness',
    subcategories: [
      {
        name: 'Health Supplements',
        products: ['Protein Powders', 'Multivitamins', 'Omega-3']
      },
      {
        name: 'Personal Care',
        products: ['Body Lotions', 'Face Wash', 'Hair Oils']
      },
      {
        name: 'Fitness Equipment',
        products: ['Yoga Mats', 'Dumbbells', 'Resistance Bands']
      }
    ]
  },
  {
    id: '6',
    name: 'Toys & Baby Products',
    subcategories: [
      {
        name: 'Toys & Games',
        products: ['Action Figures', 'Board Games', 'Puzzles']
      },
      {
        name: 'Baby Essentials',
        products: ['Diapers', 'Baby Wipes', 'Baby Food']
      },
      {
        name: 'Baby Gear',
        products: ['Strollers', 'Car Seats', 'Baby Carriers']
      }
    ]
  },
  {
    id: '7',
    name: 'Sports & Fitness',
    subcategories: [
      {
        name: 'Sports Equipment',
        products: ['Cricket Bats', 'Football', 'Badminton Rackets']
      },
      {
        name: 'Outdoor Gear',
        products: ['Tents', 'Sleeping Bags', 'Hiking Backpacks']
      },
      {
        name: 'Cycling',
        products: ['Mountain Bikes', 'Road Bikes', 'Cycling Accessories']
      }
    ]
  },
  {
    id: '8',
    name: 'Automotive',
    subcategories: [
      {
        name: 'Car Accessories',
        products: ['Seat Covers', 'Car Fresheners', 'Phone Mounts']
      },
      {
        name: 'Bike Accessories',
        products: ['Helmets', 'Bike Covers', 'Gloves']
      },
      {
        name: 'Spare Parts',
        products: ['Car Tyres', 'Brake Pads', 'Engine Oil']
      }
    ]
  },
  {
    id: '9',
    name: 'Books & Stationery',
    subcategories: [
      {
        name: 'Fiction & Literature',
        products: ['Novels', 'Short Stories', 'Poetry Books']
      },
      {
        name: 'Educational Books',
        products: ['Textbooks', 'Reference Books', 'Exam Preparation Books']
      },
      {
        name: 'Office Supplies',
        products: ['Notebooks', 'Pens', 'Sticky Notes']
      }
    ]
  },
  {
    id: '10',
    name: 'Home & Furniture',
    subcategories: [
      {
        name: 'Living Room Furniture',
        products: ['Sofas', 'Recliners', 'Coffee Tables']
      },
      {
        name: 'Bedroom Furniture',
        products: ['Beds', 'Wardrobes', 'Nightstands']
      },
      {
        name: 'Home Decor',
        products: ['Wall Art', 'Vases', 'Curtains']
      }
    ]
  },
  {
    id: '11',
    name: 'Pet Supplies',
    subcategories: [
      {
        name: 'Dog Supplies',
        products: ['Dog Food', 'Dog Beds', 'Chew Toys']
      },
      {
        name: 'Cat Supplies',
        products: ['Cat Food', 'Cat Litter', 'Cat Trees']
      },
      {
        name: 'Pet Accessories',
        products: ['Collars', 'Pet Bowls', 'Pet Carriers']
      }
    ]
  },
  {
    id: '12',
    name: 'Musical Instruments',
    subcategories: [
      {
        name: 'String Instruments',
        products: ['Guitars', 'Violins', 'Ukuleles']
      },
      {
        name: 'Percussion Instruments',
        products: ['Drum Sets', 'Cajons', 'Congas']
      },
      {
        name: 'Wind Instruments',
        products: ['Flutes', 'Harmonicas', 'Saxophones']
      }
    ]
  }
]


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [subCat,setSubCat]=useState(Categories[0].subcategories)
  const [prods,setProds]=useState(subCat[0].products)

  const [scrolled, setScrolled] = useState(false)

  let getSelectionsubcats=(data,prods)=>{
    // console.log(data)
   
    setSubCat(data)
    setProds(prods)
  }
  let getSelectionProds=(data)=>{
    // console.log(data)
   
    setProds(data)
    
  }

  useEffect(()=>{
    function handleScrool(){
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY === 0 && !scrolled) {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll',handleScrool)
  },[])
  // console.log(window.scrollY)

 
  return (
    <header className="bg-white top-0 sticky shadow-lg px-2 z-10 border-solid border-[5px] border-t-green-700  ">
      <nav aria-label="Global" className={`mx-auto  max-w-7xl ${scrolled?'opacity-0 -translate-y-4 max-h-0':'max-h-20 opacity-100 translate-y-0'} duration-[0.5s] ease-in-out flex items-center justify-between lg:px-2  transition-all`}>
        <div className="flex  px-4">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src='https://thearcweb.com/_next/image?url=https%3A%2F%2Fstatic.thearcweb.com%2Fimages%2FPROD%2FPROD-39ee3bb4-6709-4c69-bd59-0a4e445b093f.jpg%3Fw%3D144%26q%3D75&w=256&q=75'
              className="h-20 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-0 w-[50%]">
         <input type='text' placeholder='Search for Products...' className='w-[100%] p-[10px] outline-gray-400  border  border-gray-300'></input>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/[10px] font-semibol bg-gray-300 p-[10px_20px] ">
          Select Location
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/[10px] font-semibold text-white bg-black p-[10px_20px] ">
          Log in/Sign Up
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
        <CiShoppingBasket className='text-3xl  text-red-500 cursor-pointer' />
        </div>
      </nav>
      <nav aria-label="Global2" className={`mx-auto  max-w-7xl ${scrolled?'opacity-0 -translate-y-4 max-h-0':'max-h-20 opacity-100 translate-y-0'} duration-[0.5s] ease-in-out flex items-center justify-between  lg:px-[60px] transition-all`}>
      <Menu as="div" className="relative lg:inline-block text-left hidden  ">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-900">
          Shop By Category
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

     

                <MenuItems
                transition
                className="absolute left-[0%]   mt-2 w-56 origin-top-left rounded-md shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-0 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in h-screen flex "
                      >
                      <ul className="py-1  bg-black text-white font-bold text-nowrap h-full min-w-[100%]" >
                        {
                      Categories.map((category,index)=>{
                        return(
                      
                       
                         
                          <li onMouseEnter={()=>{getSelectionsubcats(category.subcategories,category.subcategories[0].products)}} 
                          
                            className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer pe-11 hover:bg-white hover:text-black"
                          key={index}>
                            {category.name}

                           
                          </li>
                      
                      
                    
                    
                       
                          )
                        })
                    }
                    </ul>
                    <ul className="py-1  bg-gray-300 text-black font-bold text-nowrap h-full min-w-[100%]" >
                     {
                        subCat.map((sub,index)=>{
                          
                          return(
                            <li onMouseEnter={()=>{getSelectionProds(sub.products)}}
                            
                            className="block px-4 py-2 text-sm text-blc data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer pe-11 hover:bg-gray-200 "
                            key={index}>
                            {sub.name} 
                            </li>
                          )
                        
                      })
                    }                         

                   </ul>

                   
                   <ul className="py-1  bg-gray-200 text-black font-bold text-nowrap h-full min-w-[100%]" >
                    {
                        prods.map((sub,index)=>{
                          
                          return(
                            <li
                              className="block px-4 py-2 text-sm text-blc data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer pe-11 hover:bg-gray-100"
                            key={index}>
                              {sub}
                              </li>
                          )
                        
                      })
                      }                         

                    </ul>
                    
                      
                       
                     
                </MenuItems>
            
       
             
     
      </Menu>
       
        <PopoverGroup className="hidden lg:flex lg:gap-x-0 w-[69%]  items-center space-x-9 ms-1 ">
         
        {
          products.map((product,index)=>{
            return(
              <Product_listings Name={product} key={index}/>
            )
          })

        }
        <Menu as="div" className="relative inline-block text-left ">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-100  py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 active:">
        <MdOutlineKeyboardDoubleArrowRight className='text-lg text-black active:text-red-500 ' />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-[0%]  bg-white  mt-2 w-56 origin-top-left rounded-md shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-0 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in flex "
      >
        <div className="py-1 font-bold text-nowrap space-y-2" >
          {
            products.map((product,index)=>{
              return(
                <Product_listings Name={product} key={index}/>
              ) 
            })
          }
        
        </div>
      </MenuItems>
    </Menu>
        </PopoverGroup>
        <div className="hidden lg:flex ">
          <a href="#" className="text-sm/[10px] font-semibol bg-gray-100 p-[10px_20px] ">
          <img
              alt=""
              src='https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-1/428248555_122101421762214546_4622310009740477938_n.jpg?stp=c39.0.274.274a_cp0_dst-jpg_e15_q65_s120x120_tt6&_nc_cat=103&ccb=1-7&_nc_sid=6738e8&_nc_ohc=MCcWy6Y5umYQ7kNvgFV24A2&_nc_zt=24&_nc_ht=scontent.fpnq7-3.fna&_nc_gid=AwfjCCB8BeAOlBMbK8ISqiA&oh=00_AYBZSlotrzrzagUhQVPsLVasNtSjG_s48ZUGvZ0uvwQjgQ&oe=675DC490'
              className="h-10 w-auto"
            />
          </a>
        </div>
       
        <div className="hidden lg:flex lg:flex-1   ">
        <a href="#" className="text-sm/[10px] font-semibol bg-gray-100 p-[10px_20px] ">
          <img
              alt=""
              src='https://www.pngkey.com/png/full/897-8979900_free-png-special-offer-png-images-transparent-special.png'
              className="h-10 w-auto"
            />
          </a>
        </div>
      </nav>
      <nav aria-label="Global3" className={`mx-auto  max-w-7xl items-center justify-between flex lg:px-3 py-3 ${scrolled?'opacity-100 translate-y-0 ':'opacity-0 -translate-y-4 hidden'} duration-[0.5s] ease-in-out  transition-all`}>
      <div className="flex  px-4">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src='https://cdn.brandfetch.io/idIM18oaEt/w/800/h/806/theme/dark/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B'
              className="h-10 w-auto"
            />
          </a>
        </div>
      <Menu as="div" className="relative lg:inline-block text-left hidden  ">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-900 mx-3">
          Shop By Category
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

     

                <MenuItems
                transition
                className="absolute left-[0%]   mt-2 w-56 origin-top-left rounded-md shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-0 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in h-screen flex "
                      >
                      <ul className="py-1  bg-black text-white font-bold text-nowrap h-full min-w-[100%]" >
                        {
                      Categories.map((category,index)=>{
                        return(
                      
                       
                         
                          <li onMouseEnter={()=>{getSelectionsubcats(category.subcategories,category.subcategories[0].products)}} 
                          
                            className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer pe-11 hover:bg-white hover:text-black"
                          key={index}>
                            {category.name}

                           
                          </li>
                      
                      
                    
                    
                       
                          )
                        })
                    }
                    </ul>
                    <ul className="py-1  bg-gray-300 text-black font-bold text-nowrap h-full min-w-[100%]" >
                     {
                        subCat.map((sub,index)=>{
                          
                          return(
                            <li onMouseEnter={()=>{getSelectionProds(sub.products)}}
                            
                            className="block px-4 py-2 text-sm text-blc data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer pe-11 hover:bg-gray-200 "
                            key={index}>
                            {sub.name} 
                            </li>
                          )
                        
                      })
                    }                         

                   </ul>

                   
                   <ul className="py-1  bg-gray-200 text-black font-bold text-nowrap h-full min-w-[100%]" >
                    {
                        prods.map((sub,index)=>{
                          
                          return(
                            <li
                              className="block px-4 py-2 text-sm text-blc data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none cursor-pointer pe-11 hover:bg-gray-100"
                            key={index}>
                              {sub}
                              </li>
                          )
                        
                      })
                      }                         

                    </ul>
                    
                      
                       
                     
                </MenuItems>
            
       
             
     
      </Menu>
      <PopoverGroup className="hidden lg:flex lg:gap-x-0 w-[60%] mx-10">
         <input type='text' placeholder='Search for Products...' className='w-[100%] p-[10px] outline-gray-400  border  border-gray-300'></input>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 ">
          <a href="#" className="text-sm/[10px] font-semibol bg-gray-300 p-[10px_20px] ">
          Select Location
          </a>
        </div>
       
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src='https://thearcweb.com/_next/image?url=https%3A%2F%2Fstatic.thearcweb.com%2Fimages%2FPROD%2FPROD-39ee3bb4-6709-4c69-bd59-0a4e445b093f.jpg%3Fw%3D144%26q%3D75&w=256&q=75'
                className="h-12 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                 Select Location
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in/Sign Up
                </a>
              </div>
             
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
