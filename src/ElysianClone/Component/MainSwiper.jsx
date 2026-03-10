import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const MainSwiper = () => {
   const mainBg = [
      { id: 1, img: "./img/main_bg1.png" },
      { id: 2, img: "./img/main_bg2.jpg" },
      { id: 3, img: "./img/main_bg3.jpg" },
      { id: 4, img: "./img/main_bg4.jpg" },
   ];

   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <>
         <Swiper
            spaceBetween={100}
            effect={"fade"}
            autoplay={{
               delay: 4000,
            }}
            modules={[EffectFade, Autoplay]}
            className="mainSwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
         >
            {mainBg.map((bg, index) => (
               <SwiperSlide key={index}>
                  <div className="main_img">
                     <img src={bg.img} alt="/" className={`${activeIndex === index ? 'is_active' : 'no_active'}`}/>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};

export default MainSwiper;
