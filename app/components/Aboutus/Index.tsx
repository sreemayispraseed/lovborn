import React from "react";
import Herosec from "../Hero-sec";
import Detailed from "./Detailed";
import AboutSection from "./Aboutsectiom";
import FreshFinds from '../Home/FreshFinds';
import assets from "../../../public/assets/assets"; 
const Aboutus: React.FC = () => {
    return (
        <>
            <Herosec
      bgimg={assets.aboutbg} 
      title="Crafted To Enhance Your Skin’s Glow" 
       
    />
            <AboutSection />
            <Detailed />
            <FreshFinds />
            
        </>
    );
};

export default Aboutus;