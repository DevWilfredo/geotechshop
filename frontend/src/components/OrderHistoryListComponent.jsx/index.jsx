import OrderHistoryItemComponent from '../OrderHistoryItemComponent'

const OrderHistoryList = ({ orders }) => (
  <div className="mt-6 flow-root sm:mt-8">
    <div className="divide-y divide-base-300">
      {orders.map((order) => (
        <OrderHistoryItemComponent key={order.id} order={order} />
      ))}
    </div>
  </div>
);

export default OrderHistoryList;