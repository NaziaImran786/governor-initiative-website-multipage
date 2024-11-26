"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from '../Slide';

export default function MySlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide mySrc={{img1:"slide1.png", img2: "slide2.png"}}/></SwiperSlide>
        <SwiperSlide><Slide mySrc={{img1:"slide3.png", img2: "slide4.png"}}/></SwiperSlide>        
        <SwiperSlide><Slide mySrc={{img1:"slide5.jpg", img2: "slide6.png"}}/></SwiperSlide>
        <SwiperSlide><Slide mySrc={{img1:"slide7.png", img2: "slide8.png"}}/></SwiperSlide>        
      </Swiper>
    </>
  );
}
