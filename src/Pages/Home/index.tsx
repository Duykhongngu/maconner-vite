import Background from "./background";
import CarouselSlideShow from "./SlideShow";

function HomeIndex() {
  return (
    <div className="flex flex-col">
      <div>
        <Background />
      </div>
      <div>
        <CarouselSlideShow />
      </div>
    </div>
  );
}

export default HomeIndex;
