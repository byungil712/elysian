import React from "react";

const SubBanner = () => {
   return (
      <section className="sub_banner">
         <div className="sub_b_i">
            <div className="sub_b_img">
               <img src="./img/sub_banner.png" alt="/" />
            </div>
            <div className="sub_b_title">
               <div className="intro" data-aos="fade-up">
                  <span>회사소개</span>
               </div>
               <div className="title" data-aos="fade-up">
                  <h3>
                     DESIGN YOUR BEAUTIFUL LIFE <br />
                     HERE IN ELYSIAN
                  </h3>
               </div>
               <div className="view" data-aos="fade-up">
                  <span>View More</span>
                  <img src="./img/view.svg" alt="/" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default SubBanner;
