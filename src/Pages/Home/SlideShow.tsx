import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideContent = [
  {
    title: "Valentine",
    about: 'Unforgettable Gifts That Say "I Love You" Without Words',
    click: "SHOP NOW",
    link: "/valentines",
    images:
      "https://macorner.co/cdn/shop/files/Valentine_s_Day_Gifts_For_Couple.png?v=1735383665&width=1780",
  },
  {
    title: "Gifts For Yourself",
    about: "Because Loving Yourself Starts with a Thoughtful Surprise",
    click: "SHOP NOW",
    link: "/valentines",
    images:
      "https://macorner.co/cdn/shop/files/Gifts_For_Yourself.png?v=1735543676&width=1780",
  },
];

function CarouselSlideShow() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full max-w-[1440px] mx-auto mt-8 sm:mt-12 lg:mt-24 px-4 sm:px-6">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {slideContent.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-none overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                  <CardContent className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 p-6 sm:p-8 lg:p-12 bg-orange-50 order-2 lg:order-1">
                    <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-red-500 text-center lg:text-left">
                      {item.title}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 max-w-[380px] text-center lg:text-left">
                      {item.about}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center justify-center h-12 px-8 text-lg sm:text-xl font-semibold text-white bg-[#f7921f] rounded-full hover:bg-white hover:text-[#f7921f] border-2 border-transparent hover:border-[#f7921f] transition-all duration-300"
                    >
                      {item.click}
                    </a>
                  </CardContent>
                  <CardContent className="p-0 order-1 lg:order-2">
                    <a href={item.link} className="block h-full">
                      <img
                        className="w-full h-full object-cover"
                        src={item.images || "/placeholder.svg"}
                        alt=""
                        loading="lazy"
                      />
                    </a>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 pointer-events-none">
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollPrev()}
            className="rounded-full w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white pointer-events-auto"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => api?.scrollNext()}
            className="rounded-full w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white pointer-events-auto"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {slideContent.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current
                ? "bg-[#f7921f] w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CarouselSlideShow;
