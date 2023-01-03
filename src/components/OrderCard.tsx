import { numberToPrice } from "../utils/numberToPrice";
import "../styles/OrderCard.css";
interface OrderCardProps {
  price: number;
  name: string;
  image: string;
}

export default function OrderCard({ name, image, price }: OrderCardProps) {
  return (
    <div className="shopping-cart">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name}</p>
      <p>{numberToPrice(price)}</p>
    </div>
  );
}
