const statusClass = {
  Pending: "badge badge-warning",
  Delivered: "badge badge-success",
  Cancelled: "badge badge-error",
};
const OrderHistoryItemComponent = ({ order }) => (
  <div className="flex flex-wrap items-center gap-y-4 py-6">
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-base-content/60">Order ID:</dt>
      <dd className="mt-1.5 text-base font-semibold text-base-content">
        <a href="#" className="hover:underline">
          {order.orderId}
        </a>
      </dd>
    </dl>
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-base-content/60">Date:</dt>
      <dd className="mt-1.5 text-base font-semibold text-base-content">
        {order.date}
      </dd>
    </dl>
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-base-content/60">Price:</dt>
      <dd className="mt-1.5 text-base font-semibold text-base-content">
        ${order.price}
      </dd>
    </dl>
    <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
      <dt className="text-base font-medium text-base-content/60">Status:</dt>
      <dd
        className={`mt-1.5 inline-flex items-center ${
          statusClass[order.status] || "badge"
        }`}
      >
        {order.status}
      </dd>
    </dl>
    <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
      <button
        type="button"
        className="btn btn-outline btn-error w-full lg:w-auto"
      >
        {order.status === "Pending" ? "Cancel order" : "Order again"}
      </button>
      <a href="#" className="btn btn-outline w-full lg:w-auto">
        View details
      </a>
    </div>
  </div>
);

export default OrderHistoryItemComponent;
