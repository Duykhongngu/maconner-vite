import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { trendingProducts } from "../data";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem } from "./cartContext";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
}

function ProductDetail() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const [currentImage, setCurrentImage] = useState<number>(0);
  console.log(currentImage);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, cartItems } = useCart(); // Add cartItems here

  const product: Product | undefined =
    location.state?.product ||
    trendingProducts.find(
      (item) => item.id === (id ? Number.parseInt(id, 10) : undefined)
    );

  useEffect(() => {
    console.log("Current cart items:", cartItems);
  }, [cartItems]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-500">Product not found!</h1>
      </div>
    );
  }

  const { name, description, price, img } = product;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: quantity,
      size: selectedSize, // Thêm size vào cart item
    };
    console.log("Product price before adding to cart:", product.price);

    addToCart(cartItem);
    console.log("Product added to cart:", cartItem);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <img
              src={img || "/placeholder.svg"}
              alt="Product image"
              className="w-full h-full object-cover rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2"
              onClick={() =>
                setCurrentImage((prev) =>
                  prev > 0 ? prev - 1 : productImages.length - 1
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() =>
                setCurrentImage((prev) =>
                  prev < productImages.length - 1 ? prev + 1 : 0
                )
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#f7921f] text-[#f7921f]"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(20 reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#f7921f]">
              ${price}USD
            </span>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Size</h3>
              <button className="text-sm text-[#f7921f]">Size Chart</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className={selectedSize === size ? "bg-[#f7921f]" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </Button>
              </div>
              <Button
                className="flex-1 bg-[#f7921f] hover:bg-[#e88616]"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Heart className="w-4 h-4" /> Add to Wishlist
            </Button>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">
                Shipping
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="description"
              className="text-sm text-gray-600 space-y-2"
            >
              <p>
                This is a detailed description of the product: {description}.
              </p>
            </TabsContent>
            <TabsContent value="shipping">Shipping information...</TabsContent>
            <TabsContent value="reviews">Customer reviews...</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
const productImages = ["/placeholder.svg", "/placeholder.svg"];

export default ProductDetail;
