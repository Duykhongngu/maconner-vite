import Background from "./background";
import BottleLamp from "./BottleLamp";
import Byproduct from "./ByProduct";
import Footer from "./Footer";
import ForHer from "./ForHer";
import ForHim from "./ForHim";
import HappyCustomers from "./HappyCustomers";
import Recipient from "./Recipient";
import CarouselSlideShow from "./SlideShow";
import TrendingHome from "./TrendingHome";

function HomeIndex() {
  return (
    <div className="flex flex-col z-10 w-full ">
      <div>
        <Background />
      </div>
      <div>
        <CarouselSlideShow />
      </div>
      <div className="xs:ml-3 xs:mr-2 max-xs:ml-3 max-xs:mr-2 ">
        <TrendingHome />
      </div>
      <div>
        <ForHim />
      </div>
      <div>
        <ForHer />
      </div>
      <div>
        <BottleLamp />
      </div>
      <div className="xs:ml-3 xs:mr-2 max-xs:ml-3 max-xs:mr-2 ">
        <Recipient />
      </div>
      <div className="xs:ml-3 xs:mr-2 max-xs:ml-3 max-xs:mr-2 ">
        <Byproduct />
      </div>
      <div className="">
        <HappyCustomers />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomeIndex;
