import { Menu, ShoppingCart, SearchIcon, ChevronLeft } from "lucide-react";
import SearchBar from "@/layouts/components/Search/Search";
import { useCart } from "../../../Pages/Products/cartContext";

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
import { Link } from "react-router-dom";

const inlineMenu = [
  { title: "Valentine's Day", link: "/valentines" },
  { title: "Occasions", link: "/" },
  { title: "Recipients", link: "/" },
  { title: "Interests", link: "/" },
  { title: "Home & Kitchen", link: "/" },
  { title: "Clothing & Jewelry", link: "/" },
  { title: "Drinkware & Barware", link: "/" },
  { title: "Accessories", link: "/" },
  { title: "Happy Customers", link: "/" },
];

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart(); // Lấy giỏ hàng từ context
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Tính tổng số lượng sản phẩm
  return (
    <nav className="w-full bg-white z-50 border-b border-indigo-100">
      <div className="md:px-4 w-full md:pt-4  text-base">
        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  onClick={() => setIsSearchOpen(false)}
                  className="pl-0"
                >
                  <span className="text-lg flex items-center gap-2">
                    <ChevronLeft />
                    Cancel
                  </span>
                </Button>
              </div>
              <SearchBar />
            </div>
          </div>
        )}

        <div className="flex justify-between  items-center max-md:px-4 max-md:mx-2 max-md:py-5 gap-4 font-semibold text-lg">
          {/* Mobile Menu */}
          <div className="lg:hidden w-[50px] ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80vw] max-w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <nav className="flex flex-col space-y-4">
                    {inlineMenu.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className="text-sm text-gray-700 font-semibold hover:text-orange-400 py-2"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link to="/" className="p-2 w-[215px] h-[44px]">
            <img
              className="w-[200px] h-[24px]"
              src="https://macorner.co/cdn/shop/files/logo-macorner.svg?v=1719548910&width=135"
              alt="logo"
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:block w-[600px] text-sm">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-base items-center gap-4">
            <Link to="/" className="cursor-pointer hover:text-orange-400">
              Sign In
            </Link>
            <Link to="/" className="cursor-pointer hover:text-orange-400">
              Wishlist
            </Link>
            <Link to="/" className="cursor-pointer hover:text-orange-400">
              Track Order
            </Link>
            <div className="flex items-center cursor-pointer hover:text-orange-400">
              <img
                className="h-5 w-5"
                src="https://macorner.co/cdn/shop/t/45/assets/US.svg?v=41884417878184858121733544885"
                alt="US Flag"
              />
              <span className="ml-2">United States</span>
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
            <button className="relative">
              <Link to="/cart">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <div className="absolute bg-red-500 text-white flex rounded-full w-5 h-5 -right-2 -top-2 justify-center items-center text-sm">
                <Link to="/cart">
                  <span>{cartCount}</span>
                </Link>
              </div>
            </button>
          </div>

          {/* Desktop Cart */}
          <div className="hidden lg:block">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-10 h-8" />
              <div className="absolute bg-red-500 text-white flex rounded-full w-5 h-5 right-0 -top-1 justify-center items-center text-sm">
                <Link to="/cart">
                  <span>{cartCount}</span>
                </Link>
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block mt-4 overflow-hidden">
          <ol className="flex justify-center whitespace-nowrap">
            {inlineMenu.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <li className="px-3 pt-3 pb-5">
                    <Link
                      to={item.link}
                      className="text-sm text-gray-700 font-semibold hover:text-orange-400"
                    >
                      {item.title}
                    </Link>
                  </li>
                </HoverCardTrigger>
                <HoverCardContent className="w-[80vw] lg:w-[1200px] max-w-full mx-3 -mt-1 space-y-1 p-5 overflow-y-auto">
                  <div className="flex flex-wrap gap-2 justify-between">
                    <Link to={item.link}>
                      <ul>
                        <li className="flex flex-col font-semibold">
                          <span className="text-sm text-gray-700">Title</span>
                          <span className="text-xs hover:text-orange-400">
                            Subcategory
                          </span>
                        </li>
                      </ul>
                    </Link>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </ol>
        </nav>
      </div>
    </nav>
  );
}

export default Header;
