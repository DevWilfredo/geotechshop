import { useNavigate } from "react-router";

const statusClass = {
  PENDING: "badge badge-warning",
  PAID: "badge badge-info",
  SHIPPED: "badge badge-accent",
  CANCELLED: "badge badge-error",
  COMPLETED: "badge badge-success",
};

const formatStatus = (status) =>
  status.charAt(0) + status.slice(1).toLowerCase();

const OrderHistoryItemComponent = ({ order }) => {
  const navigate = useNavigate();

  // Formatear la fecha
  const date = new Date(order.createdAt);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  const orderTotal = order.orderItems.reduce(
  (acc, item) => acc + item.quantity * item.product.price,
  0
);

  return (
    <div className="flex flex-wrap items-center gap-y-4 py-6">
      <dl className="w-full sm:w-1/2 lg:w-1/3">
        <dt className="text-base font-medium text-base-content/60">
          Order ID:
        </dt>
        <dd className="mt-1.5 text-base font-semibold text-base-content truncate max-w-[12rem] sm:max-w-full">
          <a href="#" className="hover:underline">
            {order.id}
          </a>
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-base-content/60">Date:</dt>
        <dd className="mt-1.5 text-base font-semibold text-base-content">
          {formattedDate}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-base-content/60">Price:</dt>
        <dd className="mt-1.5 text-base font-semibold text-base-content">
          ${orderTotal}
        </dd>
      </dl>

      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
        <dt className="text-base font-medium text-base-content/60">Status:</dt>
        <dd
          className={`mt-1.5 inline-flex items-center ${
            statusClass[order.status] || "badge"
          }`}
        >
          {formatStatus(order.status)}
        </dd>
      </dl>

      <div className="w-full grid sm:grid-cols-2 lg:block lg:w-64 lg:items-center lg:justify-end gap-4">
        <button
          onClick={() => navigate(`/orders/${order.id}`, { state: { order } })}
          className="btn btn-outline w-full lg:w-auto"
        >
          View details
        </button>
      </div>
    </div>
  );
};

export default OrderHistoryItemComponent;
