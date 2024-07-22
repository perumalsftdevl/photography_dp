import ImageSlider from "@/components/ImageSlider";
import { LandingNavbar } from "@/components/landing-navbar";
import { Carousel } from "@material-tailwind/react";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <div className="">
        <ImageSlider />
      </div>
    </div>
  );
};

export default LandingPage;
