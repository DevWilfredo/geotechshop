import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_BACKEND_URL = import.meta.env.VITE_BACKEND_API_URL

  const createOrder = async (orderData) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${API_BACKEND_URL}/api/v1/orders`,
        orderData
      );
      setOrders((prev) => [res.data, ...prev]);
      setError(null);
      return res.data;
    } catch (err) {
      console.error(err);
      setError("Error creating order");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchUserOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${API_BACKEND_URL}/api/v1/orders/getUserOrders`,
        { userId: user.id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(res.data.orders); // Aquí puedes luego hacer setOrders(res.data) si lo deseas
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Error fetching user orders");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        error,
        fetchUserOrders,
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
