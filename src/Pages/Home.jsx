import React from "react";
import Slider from "../Components/Slider/Slider";
import FeaturedFoods from "../Components/FeaturedFoods";
import OurImpact from "../Components/OurImpact/OurImpact";
import HowItWorks from "../Components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedFoods />
      <OurImpact></OurImpact>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
