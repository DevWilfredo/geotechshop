import * as lucideIcons from "lucide-react";

const ProductDeliveryInfo = () => (
  <div className="grid grid-cols-3 gap-4 mt-6">
    <div className="flex gap-4 items-start">
      <div className="w-14 flex justify-center items-center rounded-md bg-base-200 border border-base-300">
        <lucideIcons.Truck />
      </div>
      <div className="w-64">
        <p className="text-gray-400">Free Delivery</p>
        <h2 className="text-base-content">1-2 days</h2>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <div className="w-14 flex justify-center items-center rounded-md bg-base-200 border border-base-300">
        <lucideIcons.Store />
      </div>
      <div className="w-64">
        <p className="text-gray-400">In Stock</p>
        <h2 className="text-base-content">Today</h2>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <div className="w-14 flex justify-center items-center rounded-md bg-base-200 border border-base-300">
        <lucideIcons.BadgeCheck />
      </div>
      <div className="w-64">
        <p className="text-gray-400">Guaranteed</p>
        <h2 className="text-base-content">1 year</h2>
      </div>
    </div>
  </div>
);

export default ProductDeliveryInfo;