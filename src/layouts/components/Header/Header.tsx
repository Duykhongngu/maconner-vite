import { ShoppingCart } from "lucide-react";
import SearchBar from "@/layouts/components/Search/Search";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const inlineMenu = [
  {
    title: "Valentine' s Day",
    link: "/valentines",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Occasions",
    link: "",

    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Recipients",
    link: "/",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Interests",
    link: "/",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Home & Kitchen",
    link: "/",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Clothing & Jewelry",
    link: "/",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Drinkware & Barware",
    link: "/",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Accessories",
    link: "/",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
  {
    title: "Happy Customers",
    link: "/",
    menu: {
      titleMenu: `title`,
      children: {
        page: "Valentine's Day",
      },
    },
  },
];
function Header() {
  return (
    <nav className="border-indigo-100 border-b">
      <div className=" px-[13px] m-auto pt-[28px] text-base mb-0   ">
        <div className="flex justify-between items-center  gap-[18px] font-semibold text-[16px] ">
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
              <HoverCard>
                <HoverCardTrigger asChild>
                  <li key={index} className="px-[12px] pt-[12px] pb-[20px] ">
                    <a href={item.link}>
                      <span className="cursor-pointer text-[14px] text-[#121212bf] font-semibold hover:text-orange-400 ">
                        {item.title}
                      </span>
                    </a>
                  </li>
                </HoverCardTrigger>
                <HoverCardContent className="w-[1440px] mx-3 -mt-1 space-y-1 h-[700px] max-h-full min-h-full p-5 ">
                  <div className="flex w-full max-w-full flex-wrap gap-2 justify-between">
                    {inlineMenu.map((item, index) => (
                      <a key={index} href={item.link}>
                        <ul>
                          <li className="flex flex-col font-semibold">
                            <span className="text-[14px] text-[#121212bf]   ">
                              {item.menu.titleMenu}
                            </span>
                            <span className="text-[12px] hover:text-orange-400">
                              {item.menu.children.page}
                            </span>
                          </li>
                        </ul>
                      </a>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Header;
