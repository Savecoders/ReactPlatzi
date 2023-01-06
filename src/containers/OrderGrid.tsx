import OrderCard from "../components/OrderCard";
import { useProductsData } from "../hooks/productsData";
import "../styles/OrderGrid.css";
export default function OrderGrid() {
  const { loading, data: products } = useProductsData();
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
