const OrderHistoryFilters = () => (
  <div className="gap-4 sm:flex sm:items-center sm:justify-between">
    <h2 className="text-xl font-semibold sm:text-2xl">My orders</h2>
    <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
      <select className="select select-bordered min-w-[8rem]">
        <option>All orders</option>
        <option value="pre-order">Pre-order</option>
        <option value="transit">In transit</option>
        <option value="confirmed">Confirmed</option>
        <option value="cancelled">Cancelled</option>
      </select>
      <span className="inline-block text-gray-500 dark:text-gray-400">from</span>
      <select className="select select-bordered">
        <option>this week</option>
        <option value="this month">this month</option>
        <option value="last 3 months">the last 3 months</option>
        <option value="last 6 months">the last 6 months</option>
        <option value="this year">this year</option>
      </select>
    </div>
  </div>
);

export default OrderHistoryFilters;