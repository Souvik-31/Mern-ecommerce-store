import React from "react";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};

	return (
		<div className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg">
  <div>
    <img
      className="w-full h-48 object-cover"
      src={product.image}
      alt={product.name}
    />
  </div>

  <div className="flex flex-col p-5">
    <h5 className="text-xl font-semibold tracking-tight text-white">{product.name}</h5>
    
    <div className="mt-2 mb-5">
      <span className="text-3xl font-bold text-cyan-400">${product.price}</span>
    </div>

    <button
      className="mt-auto flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300"
      onClick={handleAddToCart}
    >
      <ShoppingCart size={22} className="mr-2" />
      Add to cart
    </button>
  </div>
</div>

	);
};
export default ProductCard;