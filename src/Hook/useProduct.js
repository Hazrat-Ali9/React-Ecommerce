import { useEffect, useState } from 'react';
import axios from "axios";
const useProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:9000/products");
      
        setProducts(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);
  return [products, setProducts];
};

export default useProduct;