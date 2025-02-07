import { useNavigate } from "react-router-dom";
import trend1 from "../../assets/images/Happy1.avif";
import trend2 from "../../assets/images/Happy2.avif";
import trend3 from "../../assets/images/Happy3.avif";
import trend4 from "../../assets/images/Happy4.avif";
import trend5 from "../../assets/images/Happy5.avif";
import trend6 from "../../assets/images/Happy6.avif";

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
];

function HappyCustomers() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 border-b-2 ">
      <div className="max-w-6xl mx-auto">
        {/* Main content wrapper */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Header Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f7921f] mb-4">
              Happy Customers
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Unwrap Happiness with Every Gift. Join the Macorner Family of
              Delighted Shoppers!
            </p>
            <Button
              variant="outline"
              className="rounded-full bg-[#7373731a] hover:bg-white text-gray-700 border-0 hover:border hover:border-gray-300"
            >
              Show More
            </Button>
          </div>

          {/* First two items */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {trendingProducts.slice(0, 2).map((item) => (
                <li
                  key={item.id}
                  className="list-none border-l-0 rounded-lg cursor-pointer"
                  onClick={() => navigate(item.link)}
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/3]">
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg transform transition duration-300 hover:scale-105"
                    />
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* Remaining items grid */}
        <div className="mt-8">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.slice(2).map((item) => (
              <li
                key={item.id}
                className="border-l-0 rounded-lg cursor-pointer hover:transition"
                onClick={() => navigate(item.link)}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-auto rounded-lg transform transition duration-300 hover:scale-105"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomers;
