import { useState, useContext } from "react";
import "../styles/ProductCard.css";
import { numberToPrice } from "../utils/numberToPrice";
import AppContext from "@/context/AppContext";

interface ProductCardProps {
  price: number;
  name: string;
  image: string;
}

interface AppContextProps {
  addToCart: (product: ProductCardProps) => void;
  state: {
    cart: string[];
  };
}

export default function ProductCard({ price, name, image }: ProductCardProps) {
  const { addToCart } = useContext(AppContext) as AppContextProps;

  function handleAddToCart(product: ProductCardProps) {
    addToCart(product);
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <div>
          <p>{`${numberToPrice(price)}`}</p>
          <p>{name}</p>
        </div>
        <figure onClick={() => handleAddToCart({ price, name, image })}>
          <img src="./icons/bt_add_to_cart.svg" alt="carIcon" />
        </figure>
      </div>
    </div>
  );
}
