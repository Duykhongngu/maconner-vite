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
    <section className="relative w-full max-w-[1440px] mx-auto mt-4 sm:mt-8 lg:mt-12 px-4 sm:px-6 lg:px-8">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {slideContent.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-none overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <CardContent className="flex flex-col items-center md:items-start justify-center space-y-4 sm:space-y-6 p-6 sm:p-8 lg:p-12 bg-orange-50 order-2 md:order-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-500 text-center md:text-left">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-[380px] text-center md:text-left">
                      {item.about}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center justify-center h-10 sm:h-12 px-6 sm:px-8 text-base sm:text-lg font-semibold text-white bg-[#f7921f] rounded-full hover:bg-white hover:text-[#f7921f] border-2 border-transparent hover:border-[#f7921f] transition-all duration-300"
                    >
                      {item.click}
                    </a>
                  </CardContent>
                  <CardContent className="p-0 order-1 md:order-2">
                    <a
                      href={item.link}
                      className="block aspect-w-16 aspect-h-9 md:aspect-h-full"
                    >
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
        <div className="   flex justify-center gap-5 items-center w-full px-2 sm:px-4 mt-3">
          <Button
            variant="normal"
            size="icon"
            onClick={() => api?.scrollPrev()}
            className=" w-8 h-8 sm:w-10 sm:h-10 bg-white/80  hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>
          <div className="flex justify-center items-center gap-2 ">
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
          <Button
            variant="normal"
            size="icon"
            onClick={() => api?.scrollNext()}
            className=" w-8 h-8 sm:w-10 sm:h-10 bg-white/80  hover:bg-white"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselSlideShow;
