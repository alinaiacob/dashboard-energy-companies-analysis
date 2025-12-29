import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css'

const Carousel = () => {
    return (
        <Swiper spaceBetween={10}
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}           // câte slide-uri vizibile
                navigation                   // butoane prev/next
                pagination={{ clickable: true }} // buline navigabile
                loop={true}                  // slide-uri ciclice
                autoplay={{ delay: 3000 }}   // autoplay 3 secunde
      className="carousel"  breakpoints={{
            900: { slidesPerView: 1 },

        }}>
            <SwiperSlide className="slide">
                <div>
                    <h3>NextPower energy</h3>
                    <img src="nextpower.webp" alt="nextpower" className="nextpower"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <div>
                    <h3>NextEra energy </h3>
                    <img src="nextera.jpg" alt="nextera" className="nextera"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <div>
                    <h3>Centrus Energy </h3>
                    <img src="centrus.jpg" alt="centrus" className="centrus"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <div>
                    <h3>Energy Fuels</h3>
                    <img src="energy_fuels.jpg" alt="energyfuels" className="energyfuels"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
                <div>
                    <h3>Enphase Energy</h3>
                    <img src="enphase.jpg" alt="enphase" className="enphase"/>
                </div>

                </SwiperSlide>
            <SwiperSlide className="slide">
                <div>
                    <h3>S&P 500</h3>
                    <img src="sp500.webp" alt="sp500" className="sp500"/>
                </div>
                </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;