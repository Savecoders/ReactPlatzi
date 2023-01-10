import AppContext from "@/context/AppContext";
import "@/styles/OrderItem.css";
import { useContext } from "react";
interface OrderCardProps {
  product: {
    price: number;
    name: string;
    image: string;
    id: number;
  };
}

const OrderItem = ({ product }: OrderCardProps) => {
  const { name, id, price, image } = product;
  const { removeFromCart } = useContext(AppContext) as any | undefined;

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="OrderItem">
      <figure>
        <img src={image} alt="bike" />
      </figure>
      <p>{name}</p>
      <p>${price}</p>
      <img src={""} alt="title" onClick={handleRemoveFromCart} />
    </div>
  );
};

export default OrderItem;
