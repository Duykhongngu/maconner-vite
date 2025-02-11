import { Button } from "@/components/ui/button";
import imgHim from "../../assets/images/Bottle_Lamp_.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import trend1 from "../../assets/images/Bottle-Lamp_1.webp";
import trend2 from "../../assets/images/Bottle-Lamp_2.webp";
import trend3 from "../../assets/images/Bottle-Lamp_3.webp";
import trend4 from "../../assets/images/Bottle-Lamp_4.webp";
import trend5 from "../../assets/images/trend5.webp";
import trend6 from "../../assets/images/trend6.webp";
import trend7 from "../../assets/images/trend7.webp";
import trend8 from "../../assets/images/trend8.webp";
import { useNavigate } from "react-router-dom";
const items = [
  {
    id: 1,
    title: "Bottle Lamp",
    description: "Cupid-Approved Gifts He'll Adore",
    img: imgHim,
    click: "SHOP ALL",
    link: "/valentines",
  },
];
const contents = [
  {
    id: 1,
    title: "Car visor clip",
  },
  {
    id: 2,
    title: "Leather belt",
    link: "leatherBelt",
  },
  {
    id: 3,
    title: " Whiskey glass",
  },
  {
    id: 4,
    title: "Mirror accessory",
  },
  {
    id: 5,
    title: "Boxer briefs",
  },
];

const visorClip = [
  {
    id: 1,
    name: "Product 1",
    description:
      "Drive Safe I F*cking Love You - Funny Gifts For Husband, Wife",
    price: "$19.95 USD",
    img: trend1,
    link: "/valentines",
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "I Licked It So It's Mine Naughty Couple - Personalized Men's Boxer Briefs",
    price: "$26.95 USD",
    img: trend2,
    link: "/valentines",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Friendship Puzzle Hearts - Personalized Heart Puzzle Name",
    price: "$26.95 USD",
    img: trend3,
    link: "/valentines",
  },
  {
    id: 4,
    name: "Product 4",
    description: "F#ck Valentine's Day, I Love You Everyday - Personalized Mug",
    price: "$19.95 USD",
    img: trend4,
    link: "/valentines",
  },
];
const leatherBelt = [
  {
    id: 1,
    name: "Product 5",
    description:
      "I Have An Angel Watching Over Me - Personalized Photo Car Ornament",
    price: "$26.95 USD",
    img: trend5,
    link: "/valentines",
  },
  {
    id: 2,
    name: "Product 6",
    description: "A Girl & Her Dogs Has Unbreakable Bond - Personalized Mug",
    price: "$26.95 USD",
    img: trend6,
    link: "/valentines",
  },
  {
    id: 3,
    name: "Product 7",
    description:
      "You & Me We Got This - Personalized Window Hanging Suncatcher",
    price: "$26.95 USD",
    img: trend7,
    link: "/valentines",
  },
  {
    id: 4,
    name: "Product 8",
    description:
      "Fuck Valentine's Day I Love You Everyday - Personalized Bottle Lamps",
    price: "$26.95 USD",
    img: trend8,
    link: "/valentines",
  },
];
function BottleLa() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(1); // Start with first category
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    buttonRefs.current[selectedIndex]?.focus();
  }, [selectedIndex]);

  const handlePrevious = () => {
    setSelectedIndex((current) => {
      const newIndex = current - 1;
      return newIndex < 1 ? contents.length : newIndex;
    });
  };

  const handleNext = () => {
    setSelectedIndex((current) => {
      const newIndex = current + 1;
      return newIndex > contents.length ? 1 : newIndex;
    });
  };

  // Function to render the appropriate product grid based on selectedIndex
  const renderProductGrid = () => {
    switch (selectedIndex) {
      case 1: // Car visor clip
        return (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visorClip.map((item) => (
              <li
                key={item.id}
                className="border-l-0 rounded-lg cursor-pointer transition"
                onClick={() => navigate(item.link)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105"
                  />
                </div>
                <p className="font-medium mt-2 text-base text-gray-800 hover:text-[#f7921f] transition">
                  {item.description}
                </p>
                <p className="text-[#f7921f] font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
        );
      case 2: // Leather belt
        return (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leatherBelt.map((item) => (
              <li
                key={item.id}
                className="border-l-0 rounded-lg cursor-pointer transition"
                onClick={() => navigate(item.link)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105"
                  />
                </div>
                <p className="font-medium mt-2 text-base text-gray-800 hover:text-[#f7921f] transition">
                  {item.description}
                </p>
                <p className="text-[#f7921f] font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
        );
      case 3: // Car visor clip
        return (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visorClip.map((item) => (
              <li
                key={item.id}
                className="border-l-0 rounded-lg cursor-pointer transition"
                onClick={() => navigate(item.link)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105"
                  />
                </div>
                <p className="font-medium mt-2 text-base text-gray-800 hover:text-[#f7921f] transition">
                  {item.description}
                </p>
                <p className="text-[#f7921f] font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
        );
      case 4: // Leather belt
        return (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leatherBelt.map((item) => (
              <li
                key={item.id}
                className="border-l-0 rounded-lg cursor-pointer transition"
                onClick={() => navigate(item.link)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105"
                  />
                </div>
                <p className="font-medium mt-2 text-base text-gray-800 hover:text-[#f7921f] transition">
                  {item.description}
                </p>
                <p className="text-[#f7921f] font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
        );
      case 5: // Car visor clip
        return (
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visorClip.map((item) => (
              <li
                key={item.id}
                className="border-l-0 rounded-lg cursor-pointer transition"
                onClick={() => navigate(item.link)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105"
                  />
                </div>
                <p className="font-medium mt-2 text-base text-gray-800 hover:text-[#f7921f] transition">
                  {item.description}
                </p>
                <p className="text-[#f7921f] font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
        );
      // Add more cases for other categories
      default:
        return <div>Select a category to view products</div>;
    }
  };

  return (
    <div className="mx-auto flex flex-col justify-between">
      <div>
        <ul className="flex flex-wrap bg-orange-50">
          {items.map((item) => (
            <li
              key={item.id}
              className="w-full flex flex-col md:flex-row items-center justify-center mb-8"
            >
              <div className="w-full mb-4 md:mb-0">
                <a href={item.link}>
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </a>
              </div>
              <div className="w-full flex flex-col items-center  text-center md:pl-8">
                <a href={item.link}>
                  <h3 className="text-6xl font-bold mb-2 text-[#bb0707] p-2">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-3xl p-2 capitalize font-medium">
                    {item.description}
                  </p>
                  <Button className="w-37 h-12 max-w-37 max-h-12 text-2xl my-5 px-8 inline-block bg-[#f7921f] text-white font-semibold rounded-full hover:bg-white hover:border hover:border-[#f7921f] hover:text-[#f7921f] hover:transition-all duration-300 ease-out hover:scale-105">
                    {item.click}
                  </Button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mt-6 xs:ml-3 xs:mr-2 max-xs:ml-3 max-xs:mr-2 ">
        <div className="relative flex flex-col items-center">
          {/* Desktop view */}
          <div className="hidden lg:flex flex-wrap justify-center gap-2">
            {contents.map((item) => (
              <Button
                key={item.id}
                ref={(el) => (buttonRefs.current[item.id] = el)}
                variant="outline"
                className={`w-fit h-12 rounded-full mr-3 justify-start text-sm md:text-base px-6 py-4 font-normal 
                    ${
                      selectedIndex === item.id
                        ? "bg-white border border-[#f7921f] text-[#f7921f]"
                        : "bg-[#7373731a] hover:bg-white hover:border hover:border-[#f7921f] hover:text-[#f7921f]"
                    }`}
                onClick={() => setSelectedIndex(item.id)}
              >
                {item.title}
              </Button>
            ))}
          </div>

          {/* Mobile view */}
          <div className="lg:hidden relative w-full flex justify-center items-center">
            <div className="overflow-hidden w-48 flex items-center justify-center">
              {contents.map((item) => (
                <Button
                  key={item.id}
                  ref={(el) => (buttonRefs.current[item.id] = el)}
                  variant="outline"
                  className={`absolute w-fit h-12 rounded-full justify-start text-sm px-6 py-4 font-normal transition-all duration-300 transform
                      ${
                        selectedIndex === item.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-full pointer-events-none"
                      }
                      ${
                        selectedIndex === item.id
                          ? "bg-white border border-[#f7921f] text-[#f7921f]"
                          : "bg-[#7373731a]"
                      }`}
                  onClick={() => setSelectedIndex(item.id)}
                >
                  {item.title}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              className="absolute w-10 h-10 border rounded-full left-2"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              className="absolute w-10 h-10 rounded-full right-2"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <div className="mt-8">{renderProductGrid()}</div>
      </div>
      <div className="justify-center items-center flex">
        <a
          href="/"
          className="w-36 h-12 justify-center capitalize items-center flex text-base font-medium  lg:mt-5 lg:mb-10 border bg-[#7373731a] border-[#7373731a] text-slate-700 py-2 px-4 rounded-full
             hover:border-slate-800 hover:bg-white hover:text-slate-800 hover:transition-all duration-500 ease-out hover:scale-200"
        >
          Show More
        </a>
      </div>
    </div>
  );
}

export default BottleLa;
