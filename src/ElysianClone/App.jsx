import React, { useEffect } from "react";
import "./app.css";
import "./app2.css";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Event from "./Component/Event";
import Banner from "./Component/Banner";
import Package from "./Component/Package";
import Notice from "./Component/Notice";
import SubBanner from "./Component/SubBanner";
import Footer from "./Component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
   useEffect(() => {
      const getOffset = () => {
         const width = window.innerWidth;
         if (width >= 1024) return 500;
         if (width >= 500) return -5500;
         return 550;
      };

      AOS.init({
         duration: 1500,
         once: false,
         offset: getOffset(),
      });
   }, []);

   return (
      <div className="container">
         <Header />
         <Main />
         <div className="resort">
            <div className="resort_lf">
               <p>ELYSIAN Resort</p>
               <span>GANGCHON</span>
            </div>
            <div className="resort_rt">
               <p>ELYSIAN Resort</p>
               <span>JEJU</span>
            </div>
         </div>
         <Event />
         <Banner />
         <Package />
         <Notice />
         <SubBanner />
         <Footer />
      </div>
   );
};

export default App;
