import React from 'react';
import Slider from "react-slick";
const Carousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
             <Slider {...settings}>
                <div>
                <div className="w-full bg-center bg-cover h-[38rem]" style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1571265741625-917e6b6ea1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80")` 
    }}>
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-center">
            <h1 className="text-3xl font-black text-white lg:text-6xl">Your  <span className="text-blue-400">Dream</span> Is Here</h1>
                <button className="w-full px-8 py-3 mt-8 text-xl font-bold text-white capitalize transition-colors duration-300 transform bg-black border-2 border-white lg:w-auto hover:bg-yellow-800 focus:outline-none focus:bg-blue-500">Shop Now</button>
            </div>
        </div>
                </div>
                </div>
                <div>
                <div className="w-full bg-center bg-cover h-[38rem]" style={{ 
      backgroundImage: `url("https://cdn.hasselblad.com/f/77891/5120x1712/c127f0a8b8/xcd_90v_banner.jpg")` 
    }}>
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-center">
            <h1 className="text-3xl font-black text-fuchsia-400 lg:text-6xl">Capture Your  <span className="text-emerald-300">Special</span> Life Frame</h1>
                <button className="w-full px-8 py-3 mt-8 text-xl font-bold text-white capitalize transition-colors duration-300 transform bg-black border-2 border-white lg:w-auto hover:bg-yellow-800 focus:outline-none focus:bg-blue-500">Shop Now</button>
            </div>
        </div>
                </div>
                </div>
                <div>
                <div className="w-full bg-center bg-cover h-[38rem]" style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/1553992.jpg")` 
    }}>
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-center">
            <h1 className="text-3xl font-black text-orange-600 lg:text-6xl">Cool Dude <span className="text-teal-500">Playing </span> Partner</h1>
                <button className="w-full px-8 py-3 mt-8 text-xl font-bold text-white capitalize transition-colors duration-300 transform bg-black border-2 border-white lg:w-auto hover:bg-yellow-800 focus:outline-none focus:bg-blue-500">Shop Now</button>
            </div>
        </div>
                </div>
                </div>
          
        </Slider>
        </div>
    );
};

export default Carousel;