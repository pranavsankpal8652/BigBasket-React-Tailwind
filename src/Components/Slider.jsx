import React from "react";
import Slider from "react-slick";
import img1 from '../assets/images/IBBN-SB111814265-28020.jpg'
import img2 from '../assets/images/IBBN-SB111814265-28019.jpg'
import img3 from '../assets/images/IBBN-SB111814265-28017.jfif'
import img4 from '../assets/images/IBBN-SB111814265-28022.jpg'
import img5 from '../assets/images//IBBN-SB111814265-28018.jpg'
import Slider_Section_inner from "./Slider_Section_inner";

var slider_img=[
   img1,img2,img3,img4,img5
]
export default function Slider_Section({Arrows}) {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:Arrows,
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
          arrows:false

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
     
    ]
  };
  return (
    <div className="max-w-7xl mx-auto my-10" id="sliders">
       <Slider {...settings}>
     
       {
        slider_img.map((img,index)=>{
          return(
            <div key={index}>
              <Slider_Section_inner img={img}  />
            </div>
          )
        })
       }
     
      
    </Slider>
    </div>
   
  );
}