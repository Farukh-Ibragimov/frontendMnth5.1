import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCube, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './one.css';

const One = ({swiperImage}) => {
    return (
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
        >
            {swiperImage.map((item,idx)=>
                <SwiperSlide key={idx}>
                    <img  src={item.url} alt=""/>
                </SwiperSlide>)}


        </Swiper>
    );
}

export default One;