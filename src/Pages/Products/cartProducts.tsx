"use client";

import { useState, useEffect } from "react";
import { MinusIcon, PlusIcon, XIcon, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import trend1 from "../../assets/images/trend1.webp";
import trend2 from "../../assets/images/trend2.webp";
import trend3 from "../../assets/images/trend3.webp";
import trend4 from "../../assets/images/trend4.webp";
import trend5 from "../../assets/images/trend5.webp";

import trend7 from "../../assets/images/trend7.webp";
import trend8 from "../../assets/images/trend8.webp";
import { Link } from "react-router-dom";
import { useCart, type CartItem } from "./cartContext";
import type React from "react"; // Import React

interface Product extends CartItem {
  rating: number;
  originalPrice?: number;
  sale?: boolean;
}

const relatedProducts: Product[] = [
  {
    id: "1",
    name: "Forever In My Heart - Personalized Pet Memorial Ornament",
    price: 17.95,
    originalPrice: 29.95,
    img: trend1,
    rating: 5,
    sale: true,
    quantity: 1,
    size: "Small",
  },
  {
    id: "2",
    name: "Our Friendship Is Endless - Personalized Friends Ornament",
    price: 19.95,
    originalPrice: 29.95,
    img: trend2,
    rating: 5,
    sale: true,
    quantity: 1,
    size: "Small",
  },
  {
    id: "3",
    name: "Adorable Newborn Baby Elf - Personalized Baby First Christmas",
    price: 15.95,
    originalPrice: 29.95,
    img: trend3,
    rating: 5,
    sale: true,
    quantity: 1,
    size: "Small",
  },
  {
    id: "4",
    name: "Christmas Tree With Family Names - Personalized Christmas Ornament",
    price: 17.95,
    originalPrice: 29.95,
    img: trend4,
    rating: 5,
    sale: true,
    quantity: 1,
    size: "Small",
  },
  {
    id: "5",
    name: "I Am Always With You - Personalized Memorial Photo Ornament",
    price: 19.95,
    originalPrice: 29.95,
    img: trend5,
    rating: 5,
    sale: true,
    quantity: 1,
    size: "Small",
  },
];

const EmptyCartContent: React.FC = () => (
  <>
    <div className="text-center mb-8">
      <div className="mb-4 flex justify-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-blue-50 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingCart className="w-24 h-24 text-blue-500" />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-4 max-w-lg mx-auto">
        It looks like you haven't added anything to your cart. Go ahead and
        explore some special personalized gifts for you and your loved ones from
        our top categories
      </p>
      <Link to="/">
        <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
          Keep Shopping
        </Button>
      </Link>
    </div>

    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-semibold mb-4">
          Related to items in your Shopping Cart
        </h3>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ScrollArea>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">More items to Consider</h3>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ScrollArea>
      </section>
    </div>
  </>
);

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [timeLeft, setTimeLeft] = useState<number>(600);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const removeItem = (productId: string): void => {
    removeFromCart(productId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {cartItems.length === 0 ? (
        <EmptyCartContent />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600">
                Your cart will expire in{" "}
                <span className="text-red-500 font-semibold">
                  {minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")} minutes
                </span>
                ! Check out now before your items sell out!
              </p>
            </div>

            <h1 className="text-2xl font-semibold mb-4">
              Shopping Cart ({cartItems.length})
            </h1>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-start p-4 gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <img
                        src={item.img || trend8}
                        alt={item.name}
                        className="object-cover rounded-lg w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-lg font-semibold text-blue-900 mt-2">
                        Size: {item.size}
                      </p>
                      <p className="text-lg font-semibold text-blue-900 mt-2">
                        ${item.price} USD
                      </p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <span className="mx-4">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Subtotal</h2>
                <div className="flex justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-900">
                    $
                    {cartItems
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}{" "}
                    USD
                  </span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-blue-900 hover:bg-blue-800"
                >
                  CHECKOUT
                </Button>
              </CardContent>
            </Card>
            <Link to={"/"}>
              <Button variant="outline" size="lg" className="w-full mt-4">
                Keep Shopping
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-[200px] flex-shrink-0">
      <CardContent className="p-4">
        <div className="relative aspect-square mb-2">
          <img
            src={product.img || trend7}
            alt={product.name}
            className="object-cover rounded-lg w-full h-full"
          />
          {product.sale && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
        </div>
        <h4 className="font-medium text-sm line-clamp-2 mb-2">
          {product.name}
        </h4>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold text-blue-900">
              $
              {typeof product.price === "number"
                ? product.price.toFixed(2)
                : "0.00"}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex text-yellow-400">
            {Array.from({ length: product.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
