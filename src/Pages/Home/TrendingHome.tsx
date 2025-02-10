import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trendingProducts, type Product } from "../data";

function TrendingHome() {
  const navigate = useNavigate();

  const handleProductClick = (product: Product) => {
    navigate(`/details/${product.id}`, { state: { product } });
  };

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
              className="border-l-0 rounded-lg cursor-pointer hover:transition"
              onClick={() => handleProductClick(item)}
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
      </div>
      <div className="justify-center flex items-center">
        <Button
          variant="custom"
          className="w-37 h-12 max-w-37 max-h-12 text-2xl my-5 px-8 inline-block bg-[#f7921f] text-white font-semibold rounded-full hover:bg-white hover:border hover:border-[#f7921f] hover:text-[#f7921f] hover:transition-all duration-300 ease-out hover:scale-105"
          onClick={() => navigate("/valentines")}
        >
          SHOP ALL
        </Button>
      </div>
    </div>
  );
}

export default TrendingHome;
