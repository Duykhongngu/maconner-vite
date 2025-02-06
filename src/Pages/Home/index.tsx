import Background from "./background";
import ForHim from "./ForHim";
import CarouselSlideShow from "./SlideShow";
import TrendingHome from "./trendingHome";

function HomeIndex() {
  return (
    <div className="flex flex-col z-10 px-3">
      <div>
        <Background />
      </div>
      <div>
        <CarouselSlideShow />
      </div>
      <div>
        <TrendingHome />
      </div>
      <div>
        <ForHim />
      </div>
    </div>
  );
}

export default HomeIndex;
