import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/ProductGrid.css";
export default function ProductGrid() {
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
