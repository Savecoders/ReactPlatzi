export async function getProducts() {
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=12&offset=1",
  );

  interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
  }

  const productsDefault = await response.json();

  const products = productsDefault.map((product: Product) => ({
    id: product.id,
    name: product.title,
    description: product.description,
    price: product.price,
    image: product.images[0],
  }));

  return products;
}
