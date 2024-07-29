import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import './two.css'

const  Two = ({swiperCardImage}) =>  {
    console.log(swiperCardImage)
    return (
        <>
            <Swiper className="mySwiper">
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
export  default Two