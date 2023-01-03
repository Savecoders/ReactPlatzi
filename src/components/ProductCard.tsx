import "../styles/ProductCard.css";
import { numberToPrice } from "../utils/numberToPrice";

interface ProductCardProps {
  price: number;
  name: string;
  image: string;
}

export default function ProductCard({ price, name, image }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <div>
          <p>{`$ ${numberToPrice(price)}`}</p>
          <p>{name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="carIcon" />
        </figure>
      </div>
    </div>
  );
}
