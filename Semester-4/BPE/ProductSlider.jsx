"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CardData = [
    {
      id: 1,
      image: "/images/product1.png",
      title: "Brushed Raglan Sweatshirt",
      price: "$195"
    },
    {
      id: 2,
      image: "/images/product2.png",
      title: "Cameryn Sash Tie Dress",
      price: "$545"
    },
    {
      id: 3,
      image: "/images/product3.png",
      title: "Flex Sweatshirt",
      price: "$175"
    },
    {
      id: 4,
      image: "/images/fmale4.png",
      title: "Flex Sweatpants",
      price: "$175"
    },
    {
      id: 5,
      image: "/images/fmale5.png",
      title: "Pink Fleece Sweatpants",
      price: "$195"
    },
    {
      id: 6,
      image: "/images/fmale6.png",
      title: "Lite Sweatpants",
      price: "$150"
    },
    {
      id: 7,
      image: "/images/allpro8.png",
      title: "Imperial Alpaca Hoodie",
      price: "$225"
    },
    {
      id: 8,
      image: "/images/allpro11.png",
      title: "Flex Push Button Bomber",
      price: "$225"
    },
    {
      id: 9,
      image: "/images/fmale8.png",
      title: "Muscle Tank",
      price: "$75"
    },
    {
      id: 10,
      image: "/images/fmale9.png",
      title: "Brushed Bomber",
      price: "$225"
    },
    {
      id: 11,
      image: "/images/allpro11.png",
      title: "Raglan Sweatshirt",
      price: "$195"
    },
  ];

const ProductSlider = () => {
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center space-y-5 ">
        <p className="text-sm font-semibold text-blue-600 pt-10">PRODUCTS</p>

        <div className="text-2xl lg:text-4xl font-semibold text-black ">
        Check What We Have
        </div>
      </div>
       <Slider {...settings}>
         {CardData.map((data) => (
           <div key={data.id} className="px-10 pt-5">
             
               <div className="w-full border  hover:text-white 
               duration-300 cursor-pointer z-1 hover:bg-blue-800 ">
                <Image
                   className="w-full"
                   src={data.image}
                   alt="Banking Insurance"
                   width={1000}
                   height={1000}
                 />
                
                
               </div>
               <div className="mt-4">
                  
               <h3 className="title-font text-lg font-bold text-gray-900 ">
                    {data.title}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-gray-900">{data.price}</p>
                </div>
            
           </div>
         ))}
       </Slider>
     </div>
    );
  }
  export default ProductSlider;



