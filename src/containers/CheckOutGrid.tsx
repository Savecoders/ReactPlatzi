import ProducDetail from "../components/CheckOutCard";
import { useProductsData } from "../hooks/productsData";
import "../styles/ProductDetailsGrid.css";

export default function ProductDetailsGrid() {
  const { loading, data } = useProductsData();

  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="title">My order</p>
      </div>

      {data.map(({ id, name, image, price }) => (
        <ProducDetail key={id} name={name} image={image} price={price} />
      ))}

      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>

      <button className="primary-button">Checkout</button>
    </aside>
  );
}
