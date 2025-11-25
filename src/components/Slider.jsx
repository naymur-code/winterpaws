import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper md:h-[850px] h-[370px] "
      >
        <SwiperSlide>
          <div className="absolute bg-[#000000d3] w-full h-full flex flex-col justify-center items-center   ">
            <div className="w-80 md:w-full text-center ">
              <h1 className=" md:text-7xl text-4xl font-bold text-center text-white ">
                Keep Your Pets <br />
                <span className="text-blue-400"> Warm & Safe</span>
              </h1>
              <h4 className="text-white md:text-2xl text-lg font-bold md:mt-4 md:mb-2 mt-3 mb-1">
                Professional winter care services for your furry friends
              </h4>
              <p className="text-white">
                Expert care to ensure your pets stay comfortable and healthy
                throughout the winter season
              </p>
              <Link
                to="/services"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl md:my-4 my-2"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <img
            src={hero1}
            alt=""
            width="100%"
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-[#000000d3] w-full h-full flex flex-col justify-center items-center   ">
            <div className="w-80 md:w-full text-center ">
              <h1 className=" md:text-7xl text-4xl font-bold text-center text-white ">
                Keep Your Pets <br />
                <span className="text-blue-400"> Warm & Safe</span>
              </h1>
              <h4 className="text-white md:text-2xl text-lg font-bold md:mt-4 md:mb-2 mt-3 mb-1">
                Professional winter care services for your furry friends
              </h4>
              <p className="text-white">
                Expert care to ensure your pets stay comfortable and healthy
                throughout the winter season
              </p>
              <Link
                to="/services"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl md:my-4 my-2"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <img
            src={hero2}
            alt=""
            width="100%"
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-[#000000d3] w-full h-full flex flex-col justify-center items-center">
            <div className="w-80 md:w-full text-center ">
              <h1 className=" md:text-7xl text-4xl font-bold text-center text-white ">
                Keep Your Pets <br />
                <span className="text-blue-400"> Warm & Safe</span>
              </h1>
              <h4 className="text-white md:text-2xl text-lg font-bold md:mt-4 md:mb-2 mt-3 mb-1">
                Professional winter care services for your furry friends
              </h4>
              <p className="text-white">
                Expert care to ensure your pets stay comfortable and healthy
                throughout the winter season
              </p>
              <Link
                to="/services"
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl md:my-4 my-2"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <img
            src={hero3}
            alt=""
            width="100%"
            className="h-full object-cover object-top"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
