import { useEffect, useState } from "react";
import { getProducts } from "../data/products";

export const useProductsData = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    getProducts().then((data) => {
      setProducts({
        loading: false,
        data,
      });
    });
  }, []);

  return products;
};
