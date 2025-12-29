import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


const Carousel = () => {
    return (
        <Swiper spaceBetween={20} slidesPerView={3}>
            <SwiperSlide>NextPower energy</SwiperSlide>
            <SwiperSlide>NextEra energy</SwiperSlide>
            <SwiperSlide>Centrus Energy</SwiperSlide>
            <SwiperSlide>Energy Fuels</SwiperSlide>
            <SwiperSlide>Enphase Energy</SwiperSlide>
            <SwiperSlide>S&P 500</SwiperSlide>
        </Swiper>
    );
};

export default Carousel;