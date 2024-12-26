import React from "react";
import Slider from "../Components/Slider/Slider";
import FeaturedFoods from "../Components/FeaturedFoods";
import OurImpact from "../Components/OurImpact/OurImpact";
import SeasonalFeast from "../Components/HowItWorks/SeasonalFeast";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedFoods />
      <OurImpact></OurImpact>
      <SeasonalFeast></SeasonalFeast>
    </div>
  );
};

export default Home;
