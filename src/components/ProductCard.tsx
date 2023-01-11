import { useState, useContext } from "react";
import "../styles/ProductCard.css";
import { numberToPrice } from "../utils/numberToPrice";
import AppContext from "@/context/AppContext";
import btAddToCart from "@/assets/icons/bt_add_to_cart.svg";
import btAddedToCart from "@/assets/icons/bt_added_to_cart.svg";
interface ProductCardProps {
  price: number;
  name: string;
  image: string;
  id: number;
}

interface AppContextProps {
  addToCart: (product: ProductCardProps) => void;
  state: {
    cart: ProductCardProps[];
  };
  removeFromCart: (product: ProductCardProps) => void;
}

export default function ProductCard({
  price,
  name,
  image,
  id,
}: ProductCardProps) {
  const { addToCart, removeFromCart } = useContext(
    AppContext
  ) as AppContextProps;

  const [isAdded, setIsAdded] = useState(false);

  function handleAddToCart(product: ProductCardProps) {
    addToCart(product);
  }

  function handleRemoveFromCart(product: ProductCardProps) {
    removeFromCart(product);
  }

  function handleToggle() {
    if (isAdded) {
      handleRemoveFromCart({ price, name, image, id });
    } else {
      handleAddToCart({ price, name, image, id });
    }
    setIsAdded(!isAdded);
  }

  function isProductInCart() {
    const { state } = useContext(AppContext) as AppContextProps;
    const product = state.cart.find(
      (product: ProductCardProps) => product.id === id
    );
    return !product ? btAddToCart : btAddedToCart;
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <div>
          <p>{`${numberToPrice(price)}`}</p>
          <p>{name}</p>
        </div>
        <figure onClick={handleToggle}>
          <img src={isProductInCart()} alt="carIcon" />
        </figure>
      </div>
    </div>
  );
}
