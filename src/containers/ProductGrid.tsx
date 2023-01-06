import ProductCard from "../components/ProductCard";
import "../styles/ProductGrid.css";
import { useProductsData } from "../hooks/productsData";
export default function ProductGrid() {
  const { loading, data: products } = useProductsData();
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(({ id, name, image, price }) => (
          <ProductCard key={id} name={name} image={image} price={price} />
        ))}
      </div>
    </section>
  );
}
