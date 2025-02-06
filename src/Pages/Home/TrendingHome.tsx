import { useNavigate } from "react-router-dom";
import trend1 from "../../assets/images/trend1.webp";
import trend2 from "../../assets/images/trend2.webp";
import trend3 from "../../assets/images/trend3.webp";
import trend4 from "../../assets/images/trend4.webp";
import trend5 from "../../assets/images/trend5.webp";
import trend6 from "../../assets/images/trend6.webp";
import trend7 from "../../assets/images/trend7.webp";
import trend8 from "../../assets/images/trend8.webp";
import { Button } from "@/components/ui/button";

const trendingProducts = [
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
  {
    id: 5,
    name: "Product 5",
    description:
      "I Have An Angel Watching Over Me - Personalized Photo Car Ornament",
    price: "$26.95 USD",
    img: trend5,
    link: "/valentines",
  },
  {
    id: 6,
    name: "Product 6",
    description: "A Girl & Her Dogs Has Unbreakable Bond - Personalized Mug",
    price: "$26.95 USD",
    img: trend6,
    link: "/valentines",
  },
  {
    id: 7,
    name: "Product 7",
    description:
      "You & Me We Got This - Personalized Window Hanging Suncatcher",
    price: "$26.95 USD",
    img: trend7,
    link: "/valentines",
  },
  {
    id: 8,
    name: "Product 8",
    description:
      "Fuck Valentine's Day I Love You Everyday - Personalized Bottle Lamps",
    price: "$26.95 USD",
    img: trend8,
    link: "/valentines",
  },
];

function TrendingHome() {
  const navigate = useNavigate(); // Điều hướng đến trang khác khi click

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#f7921f] mt-10 mb-5">
          Trending Now
        </h1>
      </div>
      <div className="flex gap-4 flex-wrap content-center">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingProducts.map((item) => (
            <li
              key={item.id}
              className="border-l-0 rounded-lg cursor-pointer hover: transition"
              onClick={() => navigate(item.link)}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
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
      </div>
      <div className="justify-center flex items-center">
        <a href="/valentines">
          <Button
            variant="custom"
            className="w-37 h-12 max-w-37 max-h-12 text-2xl my-5 px-8 inline-block bg-[#f7921f] text-white font-semibold  rounded-full hover:bg-white hover:border hover:border-[#f7921f] hover:text-[#f7921f] hover:transition-all duration-300 ease-out hover:scale-105"
          >
            SHOP ALL
          </Button>
        </a>
      </div>
    </div>
  );
}

export default TrendingHome;
