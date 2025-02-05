import { ShoppingCart } from "lucide-react";
import SearchBar from "@/layouts/components/Search/Search";
const inlineMenu = [
  { title: "Valentine' s Day", link: "/" },
  { title: "Occasions", link: "" },
  { title: "Recipients", link: "/" },
  { title: "Interests", link: "/" },
  { title: "Home & Kitchen", link: "/" },
  { title: "Clothing & Jewelry", link: "/" },
  { title: "Drinkware & Barware", link: "/" },
  { title: "Accessories", link: "/" },
  { title: "Happy Customers", link: "/" },
];
function Header() {
  return (
    <nav className="border-indigo-100 border-b">
      <div className=" px-[13px] m-auto pt-[28px] mb-0   ">
        <div className="flex justify-between items-center gap-[18px] font-semibold text-[16px] ">
          <a href="/" className=" ml-[-7.5px] p-[7.5px] w-[215px] h-[44px]">
            <img
              className="w-[200px] h-[24px]"
              src="https://macorner.co/cdn/shop/files/logo-macorner.svg?v=1719548910&width=135"
              alt="logo"
            />
          </a>

          <div className=" w-max-full w-[600px]  text-sm ">
            <SearchBar />
          </div>
          <div className="flex text-2xl items-center gap-[15px] text-inherit">
            <a className="text-[15px] font-medium cursor-pointer hover:text-orange-400">
              Sign In
            </a>
            <a className="text-[15px] font-medium cursor-pointer hover:text-orange-400">
              Wishlist
            </a>
            <a className="text-[15px] font-medium cursor-pointer hover:text-orange-400">
              Track Order
            </a>
            <div className="text-[15px] font-medium cursor-pointer hover:text-orange-400 flex items-center">
              <span>
                <img
                  className="h-5 w-5 "
                  src="https://macorner.co/cdn/shop/t/45/assets/US.svg?v=41884417878184858121733544885"
                  alt=""
                />
              </span>
              UnitedState
            </div>
            <button className="flex ">
              <ShoppingCart className="max-w-[39px] min-w-[39px] w-[39px] h-[30px]" />
              <div className=" absolute bg-red-500 text-white flex rounded-full w-5 h-5 right-2 top-8  justify-center items-center text-sm ">
                <span>0</span>
              </div>
            </button>
          </div>
        </div>
        <nav className="mt-[15px] ">
          <ul className="flex  justify-center ">
            {inlineMenu.map((item, index) => (
              <li key={index} className="px-[12px] pt-[12px] pb-[20px] ">
                <a href={item.link}>
                  <span className="cursor-pointer text-[14px] text-[#121212bf] font-semibold hover:text-orange-400 ">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Header;
