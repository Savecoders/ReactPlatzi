import ProducDetail from "../components/ProducDetail";
import products from "../data/products";
import "../styles/ProductDetailsGrid.css";
export default function ProductDetailsGrid() {
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="title">My order</p>
      </div>

      {products.map(({ id, name, image, price }) => (
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
