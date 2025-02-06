import { Menu, ShoppingCart, SearchIcon, ChevronLeft } from "lucide-react";
import SearchBar from "@/layouts/components/Search/Search";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="w-full bg-white z-50 border-indigo-100 border-b">
      <div className="px-[13px] m-auto pt-[28px] text-base mb-0">
        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-white  z-50 lg:hidden">
            <div className="p-4 ">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  onClick={() => setIsSearchOpen(false)}
                  className="pl-0"
                >
                  <span className="text-lg flex items-center justify-center gap-2">
                    <ChevronLeft />
                    <>Cancel</>
                  </span>
                </Button>
              </div>
              <SearchBar />
            </div>
          </div>
        )}

        <div className="flex justify-between items-center gap-[18px] font-semibold text-[16px]">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <nav className="flex flex-col space-y-4">
                    {inlineMenu.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="text-[14px] text-[#121212bf] font-semibold hover:text-orange-400 py-2"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <a href="/" className="ml-[-7.5px] p-[7.5px] w-[215px] h-[44px]">
            <img
              className="w-[200px] h-[24px]"
              src="https://macorner.co/cdn/shop/files/logo-macorner.svg?v=1719548910&width=135"
              alt="logo"
            />
          </a>

          {/* Desktop Search */}
          <div className="hidden lg:block w-max-full w-[600px] text-sm">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-2xl items-center gap-[15px] text-inherit">
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
                  className="h-5 w-5"
                  src="https://macorner.co/cdn/shop/t/45/assets/US.svg?v=41884417878184858121733544885"
                  alt=""
                />
              </span>
              UnitedState
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
            >
              <SearchIcon className="h-6 w-6" />
            </Button>
            <button className="flex relative">
              <ShoppingCart className="h-6 w-6" />
              <div className="absolute bg-red-500 text-white flex rounded-full w-5 h-5 -right-2 -top-2 justify-center items-center text-sm">
                <span>0</span>
              </div>
            </button>
          </div>

          {/* Desktop Cart */}
          <div className="hidden lg:block">
            <button className="flex relative">
              <ShoppingCart className="max-w-[39px] min-w-[39px] w-[39px] h-[30px]" />
              <div className="absolute bg-red-500 text-white flex rounded-full w-5 h-5 right-0 -top-1 justify-center items-center text-sm">
                <span>0</span>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block mt-[15px] overflow-x-auto">
          <ul className="flex justify-start lg:justify-center whitespace-nowrap">
            {inlineMenu.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <li className="px-[12px] pt-[12px] pb-[20px]">
                    <a href={item.link}>
                      <span className="cursor-pointer text-[14px] text-[#121212bf] font-semibold hover:text-orange-400">
                        {item.title}
                      </span>
                    </a>
                  </li>
                </HoverCardTrigger>
                <HoverCardContent className="w-[90vw] lg:w-[1440px] mx-3 -mt-1 space-y-1 h-auto lg:h-[700px] max-h-[80vh] lg:max-h-full min-h-full p-5 overflow-y-auto">
                  <div className="flex w-full max-w-full flex-wrap gap-2 justify-between">
                    {inlineMenu.map((item, index) => (
                      <a key={index} href={item.link}>
                        <ul>
                          <li className="flex flex-col font-semibold">
                            <span className="text-[14px] text-[#121212bf]">
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
