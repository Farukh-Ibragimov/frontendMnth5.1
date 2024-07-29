import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Four({swiperCardImage}) {
    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    swiperCardImage.map((item) => (
                        <SwiperSlide>
                            <img src={item.url} alt=""/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}
