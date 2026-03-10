import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const Package = () => {
   const packages = [
      {
         id: 1,
         category: "엘리시안 강촌",
         title: "보드스쿨 강습 예약",
         description:
            "38년 경력 김승묵 라이더가 직접 설계하고 운영하는 프리미엄 정식 보드 교육 스쿨입니다.",
         tags: `#보드스쿨 #묵브라`,
         img: "./img/package1.png",
         price: "80,000원 ~",
      },
      {
         id: 2,
         category: "엘리시안 강촌",
         title: "겨울아 가지마 객실 패키지",
         description:
            "[02.22 - 03.01] 아쉬운 겨울 마지막, 룸·조식·스키 취향대로 고르는 특별 패키지로 즐겨보세요",
         tags: "#기간한정 #객실 #스키",
         img: "./img/package2.png",
         price: "113,000원 ~",
      },
      {
         id: 3,
         category: "엘리시안 강촌",
         title: "야간·심야 스키 패키지",
         description:
            "리프트권 + 렌탈권 특가 패키지. 고요한 밤하늘 아래 은빛 슬로프에서 겨울의 낭만을 즐겨보세요.",
         tags: "#리프트 #렌탈",
         img: "./img/package3.png",
         price: "30,000원 ~",
      },
      {
         id: 4,
         category: "엘리시안 강촌",
         title: "스키&룸 패키지",
         description:
            "짜릿한 스키와 포근한 객실. 여행과 휴식이 어우러진 겨울 추억",
         tags: "#스키 #리프트&장비 #사우나 2인",
         img: "./img/package4.png",
         price: "242,000원 ~",
      },
      {
         id: 5,
         category: "엘리시안 강촌",
         title: "눈썰매&룸 패키지",
         description:
            "신나는 눈썰매와 조식을 포함한 온 가족 겨울 놀이 패키지를 즐겨 보세요.",
         tags: "#스노우힐앤펀파크 #눈썰매 3인 #조식 2인",
         img: "./img/package5.jpg",
         price: "270,000원 ~",
      },
      {
         id: 6,
         category: "엘리시안 강촌",
         title: "스키 강습 패키지",
         description:
            "전문 강사의 맞춤 강습으로 실력 높이고 짜릿한 스키 여행을 시작해 보세요.",
         tags: "#스키학교 #스키강습 1인 #조식 2인",
         img: "./img/package6.jpg",
         price: "451,000원 ~",
      },
      {
         id: 7,
         category: "엘리시안 강촌",
         title: "조식 패키지",
         description:
            "그랑셰프에서의 아침으로 시작되는 봄날의 여유. 엘리시안에서 여유로운 아침의 행복을 경험하세요.",
         tags: "#스키학교 #스키강습 1인 #조식 2인",
         img: "./img/package7.jpg",
      },
      {
         id: 8,
         category: "엘리시안 강촌",
         title: "닭갈비 패키지",
         description: "여행과 미식이 어우러진 특별한 하루를 경험세요",
         tags: "#닭갈비 #맛집",
         img: "./img/package8.png",
         price: "193,000원 ~",
      },
   ];

   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   const swiperRef = useRef(null);

   return (
      <section className="package">
         <div className="package_i package_i_d">
            <Swiper
               modules={[Scrollbar]}
               slidesPerView={4}
               slidesPerGroup={1}
               spaceBetween={40}
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
               className="packageSwiper"
            >
               {packages.map((item) => (
                  <SwiperSlide key={item.id}>
                     <div className="package_card">
                        <div className="package_card_img">
                           <img src={item.img} alt={item.title} />
                        </div>

                        <div className="package_card_text">
                           <span>{item.category}</span>
                           <h3>{item.title}</h3>
                           <p>{item.description}</p>
                           <p>{item.tags}  </p>
                           <p>{item?.price}</p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="package_controls">
               <div className="package_group">
                  <button
                     className={`package_btn ${isBeginning ? "package_btn_prev" : "package_btn_next"}`}
                     onClick={() => swiperRef.current?.slidePrev()}
                  >
                     <img src="./img/prev.svg" alt="/" />
                  </button>
                  <button
                     className={`package_btn ${isEnd ? "package_btn_prev" : "package_btn_next"}`}
                     onClick={() => swiperRef.current?.slideNext()}
                  >
                     <img src="./img/nent.svg" alt="/" />
                  </button>
               </div>
            </div>
         </div>
         <div className="package_i package_i_t">
            {packages.map((item) => (
               <div className="package_card_t" key={item.id}>
                  <div className="package_card_img_t">
                     <img src={item.img} alt={item.title} />
                  </div>

                  <div className="package_card_text_t">
                     <h3>{item.title}</h3>
                     <p>{item.description}</p>
                     <p>{item?.price}</p>
                  </div>
               </div>
            ))}
            <div className="view">
               <span>View More</span>
               <img src="./img/view_black.svg" alt="/" />
            </div>
         </div>
      </section>
   );
};

export default Package;
