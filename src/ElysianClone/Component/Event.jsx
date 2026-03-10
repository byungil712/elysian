import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const Event = () => {
   const events = [
      {
         id: 1,
         category: "엘리시안 강촌",
         title: "스프링 시즌권 출시",
         tags: "#봄맞이 #스키시즌권",
         img: "./img/event2.png",
      },
      {
         id: 2,
         category: "엘리시안 강촌",
         title: "스키장 제휴카드 할인",
         tags: "#신한카드 #NH카드 #우리카드",
         img: "./img/event3.png",
      },
      {
         id: 3,
         category: "엘리시안 강촌",
         title: "딸기 시즌 케이크",
         tags: "#시즌할인 #아라비스타",
         img: "./img/event4.png",
      },
      {
         id: 4,
         category: "엘리시안 강촌",
         title: "겨울 스키 패키지 특가",
         tags: "#스키 #겨울 #패키지",
         img: "./img/event5.png",
      },
      {
         id: 5,
         category: "엘리시안 강촌",
         title: "겨울 스키 패키지 특가",
         tags: "#스키 #겨울 #패키지",
         img: "./img/event6.png",
      },
   ];
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   const swiperRef = useRef(null);

   return (
      <section className="events">
         <div className="events_i">
            <div className="events_text">
               <div className="title">
                  <h3 data-aos="fade-up">EVENT & PROMOTION</h3>
                  <button type="button">
                     <img src="./img/plus.svg" alt="/" />
                  </button>
               </div>
               <div className="description">
                  <p data-aos="fade-up" data-durationdata-aos-delay="200">
                     특별하고 다채로운 엘리시안만의 이벤트·프로모션
                  </p>
               </div>
            </div>
            <div className="events_contents">
               <div className="main_event">
                  <div className="img_box">
                     <img src="./img/event1.png" alt="/" />
                  </div>
                  <div className="text_box">
                     <div className="category">
                        <span>엘리시안 강촌</span>
                     </div>
                     <div className="title" data-aos="fade-up">
                        <h3>올인클루시브 패키지</h3>
                     </div>
                     <div className="tags" data-aos="fade-up">
                        <p>#학생전용 #올인원</p>
                     </div>
                  </div>
               </div>
               <div className="sub_event">
                  <Swiper
                     modules={[Scrollbar]}
                     slidesPerView={3}
                     slidesPerGroup={1}
                     spaceBetween={200}
                     scrollbar={{
                        hide: false,
                     }}
                     onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                     }}
                     onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                     }}
                     breakpoints={{
                        1024: {
                           slidePerView: 4,
                        },
                     }}
                     className="eventSwiper"
                  >
                     <SwiperSlide>
                        <div className="event_card">
                           <div className="event_card_img">
                              <img src="./img/event1.png" alt="/" />
                           </div>
                           <div className="event_card_text">
                              <span>엘리시안 강촌</span>
                              <h3 data-aos="fade-up">올인클루시브 패키지</h3>
                              <p>#학생전용 #올인원</p>
                           </div>
                        </div>
                     </SwiperSlide>

                     {events.map((event) => (
                        <SwiperSlide key={event.id}>
                           <div className="event_card">
                              <div className="event_card_img">
                                 <img src={event.img} alt={event.title} />
                              </div>
                              <div className="event_card_text">
                                 <span>{event.category}</span>
                                 <h3 data-aos="fade-up">{event.title}</h3>
                                 <p data-aos="fade-up">{event.tags}</p>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="event_controls">
                     <div className="event_group">
                        <button
                           className={`event_btn ${isBeginning ? "event_btn_prev" : "event_btn_next"}`}
                           onClick={() => swiperRef.current?.slidePrev()}
                        >
                           <img src="./img/prev.svg" alt="/" />
                        </button>
                        <button
                           className={`event_btn ${isEnd ? "event_btn_prev" : "event_btn_next"}`}
                           onClick={() => swiperRef.current?.slideNext()}
                        >
                           <img src="./img/nent.svg" alt="/" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Event;
