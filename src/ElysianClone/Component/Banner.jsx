import React from "react";

const Banner = () => {
   return (
      <section className="banner">
         <div className="banner_i">
            <div className="banner_img">
               <img src="./img/center_banner.png" alt="/" />
            </div>
            <div className="banner_text">
               <div className="title" data-aos="fade-up">
                  <img src="./img/banner_title.svg" alt="/" />
               </div>
               <div className="description" data-aos="fade-up">
                  <p>
                     엘리시안이 준비한 특별 객실 패키지와 동계 스키 상품. <br />{" "}
                     눈부신 설원 속, 편안한 투숙과 짜릿한 활주로 잊지 못할 겨울
                     추억을 완성하세요.
                  </p>
               </div>
               <div className="view">
                  <span>Veiw More +</span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Banner;
