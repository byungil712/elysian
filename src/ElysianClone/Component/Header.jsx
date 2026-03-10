import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header style={{ backgroundColor: scrolled ? "#000" : "transparent" }}>
         <div className="header_i">
            <div className="logo">
               <img src="./img/logo.svg" alt="logo" />
            </div>
            <div className="top_menu">
               <ul>
                  <li>
                     <button type="button">
                        <img src="./img/calendar.svg" alt="/" />
                        <span>Reservation</span>
                     </button>
                  </li>
                  <li>
                     <Link>로그인</Link>
                  </li>
                  <li>
                     <Link>회원가입</Link>
                  </li>
                  <li>
                     <Link>단체/행사 문의</Link>
                  </li>
                  <li>
                     <button type="button">
                        <img src="./img/earth.svg" alt="/" />
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Header;
