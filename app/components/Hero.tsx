"use client";
import React from "react";
import SlickSlider from "react-slick"; // carousel wrapper
import Slider from "./Slider"; // your custom slide component
import assets from "../../public/assets/assets";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: false,
    arrows: false,
  };

  const sliderData = [
    {
      img: assets.banner1,
      id: 1,
      title: "IDEAL SKIN RADIANCE",
      mainTitle: "Glow Naturally with Lovborn",
      desc: "Our soap is thoughtfully formulated with natural ingredients to gently cleanse, nourish, and restore your skin’s natural radiance. Experience a glow that feels as healthy as it looks—pure, soft, and luminous every day.",
    },
    {
      img: assets.banner2,
      id: 2,
      title: "Title 2",
      mainTitle: "Main 2",
      desc: "Description 2",
    },
    {
      img: assets.banner3,
      id: 3,
      title: "Title 3",
      mainTitle: "Main 3",
      desc: "Description 3",
    },
    {
      img: assets.banner4,
      id: 4,
      title: "Title 4",
      mainTitle: "Main 4",
      desc: "Description 4",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden hero-sec-gtt ">
      <SlickSlider {...settings}>
        {sliderData.map((item) => (
          <Slider
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            desc={item.desc}
          />
        ))}
      </SlickSlider>

      {/* Scoped styles for slick dots */}
      
    </div>
  );
};

export default Hero;
