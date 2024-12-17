import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home'

import Slider from './Components/Slider';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Home/>
  </StrictMode>,
)
