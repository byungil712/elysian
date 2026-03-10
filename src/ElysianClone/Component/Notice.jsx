import React from "react";

const Notice = () => {
   const notices = [
      {
         id: 1,
         category: "「엘리시안 강촌」 ",
         title: "4월 정규홀 예약 안내",
         day: "26.02.23",
      },
      {
         id: 2,
         category: "「엘리시안 강촌」",
         title: "스키장 운영 안내",
         day: "26.02.04",
      },
      {
         id: 3,
         category: "「엘리시안 강촌」",
         title: "3월 정규홀 예약 안내",
         day: "26.02.03",
      },
      {
         id: 4,
         category: "「엘리시안 강촌」",
         title: "스키 대회 진행 및 슬로프 이용 제한 안내",
         day: "26.01.31",
      },
      {
         id: 5,
         category: "「엘리시안 강촌」",
         title: "콘도미니엄 휴관 안내",
         day: "26.01.28",
      },
   ];

   return (
      <section className="notice">
         <div className="notice_i">
            <div className="notice_text">
               <div className="notice_title">
                  <h3 data-aos="fade-up">NOTICE</h3>
                  <button type="button">
                     <img src="./img/plus.svg" alt="/" />
                  </button>
               </div>
               <div className="description">
                  <p data-aos="fade-up">다양한 공지사항을 안내드립니다</p>
               </div>
            </div>
            <div className="notice_contents">
               {notices.map((notice) => (
                  <div className="notice_item" key={notice.id}>
                     <div className="notice_content">
                        <div className="title">
                           <p>{notice.category}</p>
                           <p>{notice.title}</p>
                        </div>
                        <div className="day">
                           <span>{notice.day}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Notice;
