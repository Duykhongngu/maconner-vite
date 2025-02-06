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
  console.log({ current });
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
    <div className=" w-full relative max-w-[1440px] mx-auto mt-24 z-0 ">
      {" "}
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full ">
        <CarouselContent>
          {slideContent.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="border-none">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  <CardContent className="flex  bg-orange-50 flex-col items-center  justify-center justify-items-center space-y-6 p-8 md:p-12">
                    <h2 className="text-4xl md:text-[45px] font-bold text-red-500">
                      {item.title}
                    </h2>
                    <p className=" w-[380px]  text-lg md:text-lg content-center place-content-center text-gray-700">
                      {item.about}
                    </p>
                    <a
                      href={item.link}
                      className=" w-37 h-12 max-w-37 max-h-12 text-2xl inline-block bg-[#f7921f] text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:border hover:border-[#f7921f] hover:text-[#f7921f] transition-colors"
                    >
                      {item.click}
                    </a>
                  </CardContent>
                  <CardContent className="p-0">
                    <a href={item.link} className="block">
                      <img
                        className="w-full h-full object-cover"
                        src={item.images || "/placeholder.svg"}
                        alt={item.title}
                      />
                    </a>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-4 mt-4">
        <Button
          variant="normal"
          size="icon"
          onClick={() => api?.scrollPrev()}
          className="rounded-full w-10 h-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="normal"
          size="icon"
          onClick={() => api?.scrollNext()}
          className="rounded-full w-10 h-10"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

export default CarouselSlideShow;
