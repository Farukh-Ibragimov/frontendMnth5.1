// import React from 'react';
// import {Swiper,SwiperSlide} from "swiper/react";
// import {EffectCards,EffectCube,Pagination} from   "swiper/modules"
//
//
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';
//
//
//
// const SwiperComponent=({swiperImage,handleChange})=> {
//     return (
//         <Swiper
//             centeredSlides={false}
//             modules={[Navigation,Pagination]}
//             navigation
//             pagination
//             slidesPerView={3}
//             effect={'cards'}
//             grabCursor={true}
//             modules={[EffectCards]}
//             className="mySwiper"
//
//         >
//             {swiperImage.map((item,idx)=>
//             <SwiperSlide key={idx}>
//                     Slide {idx++}
//
//             </SwiperSlide>)}
//
//
//         </Swiper>
//     );
// }
//
// export default SwiperComponent;