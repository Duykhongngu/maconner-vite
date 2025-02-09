import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dcma from "@/assets/images/dmca_protected_1_120.png";
import amazon from "@/assets/images/amazon.png";
import amex from "@/assets/images/footer3.png";
import applepay from "@/assets/images/footer4.png";
import ft5 from "@/assets/images/footer5.png";
import ft6 from "@/assets/images/footer6.png";
import ft7 from "@/assets/images/footer7.png";
import ft8 from "@/assets/images/footer8.png";
import ft9 from "@/assets/images/footer9.png";
import ft10 from "@/assets/images/footer10.png";
import ft11 from "@/assets/images/footer11.png";
import ft12 from "@/assets/images/footer12.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Facebook,
  GlobeIcon,
  Instagram,
  MessageCircleHeart,
  TwitchIcon,
  Twitter,
} from "lucide-react";

const shopByProduct = [
  { name: "Drinkware", href: "/product/drinkware" },
  { name: "Home Décor", href: "/product/home-decor" },
  { name: "Leather Gifts", href: "/product/leather-gifts" },
  { name: "Clothing & Accessories", href: "/product/clothing" },
  { name: "Bedding", href: "/product/bedding" },
  { name: "Photo Gifts", href: "/product/photo-gifts" },
  { name: "Gift Cards", href: "/product/gift-cards" },
];

const shopByOccasion = [
  { name: "Christmas", href: "/occasion/christmas" },
  { name: "Birthday", href: "/occasion/birthday" },
  { name: "Thank You", href: "/occasion/thank-you" },
  { name: "Just Because", href: "/occasion/just-because" },
  { name: "Memorial For Loved Ones", href: "/occasion/memorial" },
  { name: "Pet Memorial", href: "/occasion/pet-memorial" },
  { name: "Anniversary", href: "/occasion/anniversary" },
  { name: "Halloween", href: "/occasion/halloween" },
  { name: "Back to School", href: "/occasion/back-to-school" },
  { name: "Easter", href: "/occasion/easter" },
  { name: "Graduation", href: "/occasion/graduation" },
  { name: "Father's Day", href: "/occasion/fathers-day" },
  { name: "Mother's Day", href: "/occasion/mothers-day" },
  { name: "Valentine's Day", href: "/occasion/valentines-day" },
  { name: "Wedding and Engagement", href: "/occasion/wedding" },
];

const paymentMethods = [
  { name: "DMCA", image: dcma },
  { name: "Amazon", image: amazon },
  { name: "American Express", image: amex },
  { name: "Apple Pay", image: applepay },
  { name: "Diners Club", image: ft5 },
  { name: "Discover", image: ft6 },
  { name: "Google Pay", image: ft7 },
  { name: "Mastercard", image: ft8 },
  { name: "PayPal", image: ft9 },
  { name: "Shop Pay", image: ft10 },
  { name: "Venmo", image: ft11 },
  { name: "Visa", image: ft12 },
];

function Footer() {
  return (
    <div className="xs:ml-3 xs:mr-2 max-xs:ml-3 max-xs:mr-2 ">
      <section className="w-full py-8 bg-[#fff8e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-[20px] sm:text-[30px] text-center font-semibold mb-4">
            Today Only: Secret privileges for you!
          </h2>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <Input
              className="w-full sm:w-64 h-12 bg-white border pl-4 text-base text-black font-normal border-[#f7921f] rounded-md hover:border-separate"
              placeholder="Enter your email"
              type="email"
              required
            />
            <Button className="w-full sm:w-auto uppercase px-6 text-xl text-white font-bold h-12 rounded-lg bg-[#fb6718]">
              Reveal Now
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-[#0B1F38] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gift Finder Column */}
            <div>
              <a
                href="/gifts"
                className="text-xl font-semibold mb-4 cursor-pointer"
              >
                Gift Finder
              </a>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="product">
                  <AccordionTrigger className="text-white text-xl font-semibold hover:text-white">
                    Shop By Product
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {shopByProduct.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="occasion">
                  <AccordionTrigger className="text-white text-xl font-semibold hover:text-white">
                    Shop By Occasion
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {shopByOccasion.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="recipient">
                  <AccordionTrigger className="text-white text-xl font-semibold hover:text-white">
                    Shop By Recipient
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {shopByProduct.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors "
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="hobby">
                  <AccordionTrigger className="text-white text-xl font-semibold hover:text-white">
                    Shop By Hobby
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {shopByProduct.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Macorner Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Macorner</h2>
              <div className="flex flex-col space-y-2">
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Help and Support Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Help and Support</h2>
              <div className="flex flex-col space-y-2">
                <a
                  href="/returns"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Return Policy
                </a>
                <a
                  href="/help"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="/size-chart"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Size Chart
                </a>
                <a
                  href="/shipping"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping And Delivery
                </a>
                <a
                  href="/cancellation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cancellation & Modification Policy
                </a>
                <a
                  href="/refund"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Refund & Replacement Policy
                </a>
                <a
                  href="/disclaimer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Disclaimer Regarding Fake Websites
                </a>
              </div>
            </div>

            {/* Get in Touch Column */}
            <div className="text-center justify-center sm:justify-start">
              <h2 className="text-xl font-semibold mb-4">GET IN TOUCH</h2>
              <p className="text-white mb-4 text-base font-semibold">
                Support Time: 9 AM to 5 PM, Mon-Sat
              </p>
              <Button className=" w-[253px] max-w-full min-h-[44px] h px-6 py-3 text-base font-semibold bg-[#fc6514] hover:bg-[#f7921f] text-white rounded-full mb-6">
                Open A Support Ticket
              </Button>
              <div className="flex space-x-4 text-center justify-center sm:justify-start">
                <a href="#" className="text-gray-300  hover:text-white">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <MessageCircleHeart className="h-7 w-7" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <GlobeIcon className="h-7 w-7" />
                </a>

                <a href="#" className="text-gray-300 hover:text-white">
                  <TwitchIcon className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {paymentMethods.map((method) => (
                <img
                  key={method.name}
                  src={method.image || "/placeholder.svg"}
                  alt={`Pay with ${method.name}`}
                  className="h-6 w-auto object-contain"
                />
              ))}
            </div>

            {/* Footer Links */}
            <div className="text-center text-sm text-gray-400">
              <a href="/terms" className="hover:text-white">
                Terms Of Services
              </a>
              <span className="mx-2">•</span>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
              <span className="mx-2">•</span>
              <span>
                MA Commerce Inc. (trading as Macorner), 8 The Green, Ste A,
                Dover, DE 19901
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
