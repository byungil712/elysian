import React from "react";

const Footer = () => {
   return (
      <footer>
         <div className="footer_i">
            <div className="top_footer">
               <div className="footer_menu">
                  <ul>
                     <li>
                        <a href="#">
                           <span>회사 소개</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>인재 채용</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>사이버 신문고</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>이용약관</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <p>개인정보처리방침</p>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>이메일무단수집거부</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>고정형 영상정보처리기기 운영처리방침</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>제휴 안내</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>Foreigner Reservation</span>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <span>사이트맵</span>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="select_bar">
                  <select>
                     <option value="family">Family Site</option>
                     <option value="Gs">GS E&C</option>
                  </select>
               </div>
            </div>
            <div className="bottom_footer">
               <div className="gangchon">
                  <div className="title">
                     <h4>엘리시안 강촌</h4>
                  </div>
                  <div className="address">
                     <p>강원특별자치도 춘천시 남산면 북한강변길 688</p>
                     <p>
                        688, Bukhangangbyeon-gil, Namsan-myeon, <br />
                        Chuncheon-si, Gangwon-do
                     </p>
                     <p>TEL : 033-260-2000</p>
                  </div>
               </div>
               <div className="jeju">
                  <div className="title">
                     <h4>엘리시안 제주</h4>
                  </div>
                  <div className="address">
                     <p>제주특별자치도 제주시 애월읍 평화로 1738-116</p>
                     <p>1738-116, Pyeonghwa-ro, Aewol-eup, Jeju-si, Jeju-do</p>
                     <p>TEL : 064-798-7000</p>
                  </div>
               </div>
               <div className="gs">
                  <div className="title">
                     <h4>지에스건설(주)</h4>
                  </div>
                  <div className="address">
                     <p>서울시 종로구 종로 33 그랑서울</p>
                     <p>사업자등록번호 104-81-18121</p>
                     <p>통신판매업신고 2004-00072 | 대표이사 허윤홍</p>
                     <p>
                        개인정보관리책임자 : (강촌) 사업본부장 박환성 상무{" "}
                        <br />
                        (제주) 사업본부장 최열균 상무
                     </p>
                  </div>
               </div>
            </div>
            <div className="logo">
               <div className="logo_lf">
                  <div className="elysian">
                     <div className="img_box">
                        <img src="./img/footer_logo.svg" alt="/" />
                     </div>
                  </div>
               </div>
               <div className="logo_rt">
                  <div className="isms">
                     <div className="img_box">
                        <img src="./img/isms.png" alt="/" />
                     </div>
                     <div className="text_box">
                        <div className="top">
                           <span>인증범위</span>
                           <p>엘리시안 강촌/제주 리조트 서비스 운영</p>
                        </div>
                        <div className="bottom">
                           <span>유효기간</span>
                           <p>2024.10.16 ~ 2027.10.15</p>
                        </div>
                     </div>
                  </div>
                  <div className="kb">
                     <div className="img_box">
                        <img src="./img/kb.svg" alt="/" />
                     </div>
                  </div>
                  <div className="lg">
                     <div className="img_box">
                        <img src="./img/lg.png" alt="/" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
