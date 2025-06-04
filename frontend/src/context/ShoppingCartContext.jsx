import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ShoppingCartContex = createContext();
const API_BACKEND_URL = import.meta.env.VITE_BACKEND_API_URL

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_BACKEND_URL}/api/v1/products`);
      const data = response.data;
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCartItems([...cartItems, newProduct]);
    }
  };

  const findSingleProduct = (id) => {
    const product = products.find((element) => element.id === id);
    return product;
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateCartSubtotal = () => {
    const total = cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <ShoppingCartContex.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        products,
        findSingleProduct,
        calculateCartSubtotal,
      }}
    >
      {children}
    </ShoppingCartContex.Provider>
  );
};

export const useCart = () => useContext(ShoppingCartContex);
