import OrderCard from "../components/OrderCard";
import products from "../data/products";
import "../styles/OrderGrid.css";
export default function OrderGrid() {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My order</h1>

        {products.map(({ id, name, image, price }) => (
          <OrderCard key={id} name={name} image={image} price={price} />
        ))}
      </div>
    </div>
  );
}
