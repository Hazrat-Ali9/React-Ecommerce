import React from 'react';
import useProduct from '../../Hook/useProduct';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
const Products = () => {
    const settings = {
        
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    gap: 5
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [products] = useProduct();
    return (
        <div>
      <section className="py-20">
        <h1 className="mb-12 text-center font-sans text-4xl font-bold text-white">
          All Product<span className="text-blue-600">.</span>
        </h1>
        <Slider {...settings}>
    {products.map((item) => (
      <div className="relative max-w-sm min-w-[340px] bg-black shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer" key={item.id}>
        <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-44 rounded-2xl w-full object-cover" src={item.image} alt=''/>
        <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
            <path  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </p>
      </div>
      <div className=" pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-white mb-0">{item.name}</p>
          <p className="text-md text-white mt-0">$340</p>
        </div>
        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70 " fill="none" viewBox="0 0 24 24" stroke="gray">
            <path  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
      </div>
    ))}
  </Slider>
      </section>
    </div>
    );
};

export default Products;