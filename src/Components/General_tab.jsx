import React from 'react'
import Genral_tab_sections from './Genral_tab_sections'
const tabs=[
    {
        name:'EGGS,MEAT,AND FISH',
        bg:'bg-gray-200'  

    },
    {
        name:'NEUPASS',
        bg:'bg-gradient-to-r from-blue-200 via-violet-500 to-orange-500'  

    },
    {
        name:'AYURVEDA',
        bg:'bg-green-700'  

    },
    {
        name:'BUY MORE SAVE MORE',
        bg:'bg-gray-200'  

    },
    {
        name:'DEALS OF THE WEEK',
        bg:'bg-gray-200'  

    },
    {
        name:'COMBO STORE',
        bg:'bg-gray-200'  

    },
]
export default function General_tab() {
  return (
    <div className='max-w-7xl mx-auto flex lg:flex-row flex-col justify-between'>

      {
        tabs.map((tab,index)=>{
            return(
                <Genral_tab_sections tab={tab} key={index}/>
            )
        })
      }
    </div>
  )
}
