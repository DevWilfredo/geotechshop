import OrderHistoryFilters from "../../components/OrderHistoryFiltersComponent";
import OrderHistoryList from "../../components/OrderHistoryListComponent.jsx";
import { orders } from "../../data"
// Sample data for orders


const OrderHistory = () => {
  return (
    <section className="bg-base-100 border border-base-content rounded-md py-8 antialiased md:py-16">
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
