import React, { useEffect } from "react";
import MainSwiper from "./MainSwiper";

const Main = () => {
   return (
      <main>
         <div className="main_i">
            <div className="main_bg">
               <MainSwiper />
            </div>
            <div className="overlay"></div>
            <div className="main_title">
               <h2>
                  DESIGN YOUR BEAUTIFUL LIFE <br />
                  HERE IN ELYSIAN
               </h2>
               <p>
                  단순한 휴양지를 넘어 일상에 스며드는 행복의 정원 모든 순간이
                  특별해지는 곳, <br />
                  엘리시안에서 삶의 소중한 순간들을 채워보세요.
               </p>
            </div>
         </div>
      </main>
   );
};

export default Main;
