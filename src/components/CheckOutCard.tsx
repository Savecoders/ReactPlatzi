import "../styles/ProductDetailsCard.css";
import { numberToPrice } from "../utils/numberToPrice";

interface OrderCardProps {
  price: number;
  name: string;
  image: string;
}

export default function ProducDetail({ name, image, price }: OrderCardProps) {
  return (
    <div className="my-order-content">
      <div className="shopping-cart">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p>{name}</p>
        <p>{numberToPrice(price)}</p>
        <img src="./icons/icon_close.png" alt="close" />
      </div>
      {"}"}
    </div>
  );
}
