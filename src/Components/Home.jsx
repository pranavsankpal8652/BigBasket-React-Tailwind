import React from 'react'
import Header from '../Components/Header'
import General_tab from './General_tab'
import Best_seller from './Best_seller'
import TOP_offers from './TOP_offers'
import Fruits_vege from './Fruits_Vege'
import Slider_Section from './Slider'
import Your_Daily_Staples from './Your_Daily_Staples'
import Beverages from './Beverages'
import Footer_First from './Footer_First'
import Footer_second from './Footer_second'

export default function Home() {
  return (
   <>
   <Header />
   <Slider_Section Arrows={false} />
   <General_tab/>
   <Best_seller />
   <TOP_offers/>
   <Fruits_vege/>
   <Your_Daily_Staples/>
   <Beverages title='Non Veg & Snacks' skip='10'/>
   <Beverages  title='Foreign Items' skip='22'/>
   <Beverages title='Home and Kitchen' skip='30'/>
   <Slider_Section  Arrows={true}/>
   <Footer_First/>
   <Footer_second/>
   </>
  )
}
