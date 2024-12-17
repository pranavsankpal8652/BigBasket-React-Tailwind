import React from 'react'

export default function Genral_tab_sections({tab}) {
  return (
    <div className={`font-bold p-5 ${tab.bg} rounded-lg cursor-pointer col-span-1`}> 
        {tab.name}
      </div>
  )
}
