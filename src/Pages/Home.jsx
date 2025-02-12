import Slider from "../Components/Slider/Slider";
import FeaturedFoods from "../Components/FeaturedFoods";
import OurImpact from "../Components/OurImpact/OurImpact";
import SeasonalFeast from "../Components/HowItWorks/SeasonalFeast";
import FoodDiscovery from "../Components/FoodDiscovery/FoodDiscovery";
import Reviews from "../Components/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedFoods />
      <FoodDiscovery></FoodDiscovery>
      <OurImpact></OurImpact>
      <SeasonalFeast></SeasonalFeast>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
