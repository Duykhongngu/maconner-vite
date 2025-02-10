import { useNavigate } from "react-router-dom";
import { trendingProducts } from "../data";

function Recipient() {
  const navigate = useNavigate(); // Điều hướng đến trang khác khi click

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl sm:text-4xl  font-semibold text-[#f7921f] mt-10 mb-5">
          Shop By Recipients
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recipient;
