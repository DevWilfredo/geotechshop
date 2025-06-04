import { useEffect } from "react";
import { useNavigate } from "react-router";
import OrderHistoryFilters from "../../components/OrderHistoryFiltersComponent";
import OrderHistoryList from "../../components/OrderHistoryListComponent.jsx";
import { useOrders } from "../../context/OrderContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const OrderHistory = () => {
  const { fetchUserOrders, orders } = useOrders();
  const { user, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && token) {
      fetchUserOrders();
    }
  }, [user, token]);

  // Mostrar spinner si orders es undefined/null (cargando)
  if (orders == null) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Cargando</h1>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  // Mostrar mensaje si no hay órdenes
  if (orders.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold mb-4">No hay órdenes para mostrar</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Ir al catálogo de productos
        </button>
      </div>
    );
  }

  // Mostrar lista de órdenes si existen
  return (
    <section className="bg-base-100 border border-base-content/50 shadow shadow-base-content rounded-md py-8 antialiased md:py-16 mt-24">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <OrderHistoryFilters />
          <OrderHistoryList orders={orders} />
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
// This code defines a React component called OrderHistory that displays a user's order history.
// It imports two child components, OrderHistoryFilters and OrderHistoryList, to handle the filtering and listing of orders, respectively.
