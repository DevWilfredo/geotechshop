import { Download } from "lucide-react";
import { useLocation } from "react-router";

const OrderDetails = () => {
  const location = useLocation();
  const order = location.state?.order; // Asegúrate de pasar la orden por estado de navegación

  if (!order) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const subtotal = order.orderItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <section className="container mx-auto py-20 px-8">
      <h4 className="text-2xl font-semibold text-base-content">
        Order Details
      </h4>
      <p className="text-base font-light text-base-content/70">
        Order placed on{" "}
        <span className="font-bold text-base-content">{formattedDate}</span>
      </p>
      <div className="mt-8 grid lg:gap-x-6 gap-y-6 lg:grid-cols-12 grid-cols-6">
        <div className="col-span-8 space-y-6">
          {/* Order Info Card */}
          <div className="relative rounded-md bg-base-100 text-base-content shadow border border-base-300">
            <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Información de la orden */}
              <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                <div>
                  <p className="font-semibold">Date Ordered</p>
                  <p className="text-base-content/70">{formattedDate}</p>
                </div>
                <div>
                  <p className="font-semibold">Order Number</p>
                  <p className="text-base-content/70 break-all">{order.id}</p>
                </div>
              </div>

              {/* Botón de descarga */}
              <div className="flex justify-end">
                <button
                  className="btn btn-outline btn-primary rounded-xl w-full md:w-auto"
                  type="button"
                >
                  Download invoice
                  <Download className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Order Progress Card */}
          <div className="relative flex flex-col rounded-md bg-base-100 text-base-content shadow border border-base-300">
            <div className="relative mt-4 mx-4 rounded-xl overflow-hidden bg-base-100 text-base-content -mt-6 md:h-40 h-32border-b border-base-300">
              <div className="w-full relative flex items-center justify-between">
                <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-base-300"></div>
                {/* Step 1 */}
                <div className="relative z-10 grid place-items-center w-10 h-10 rounded-full bg-base-content text-base-content  font-bold">
                  <div className="absolute md:pl-32 pl-6 md:-bottom-[4.5rem] -bottom-[3rem] w-max text-left">
                    <h6 className="font-semibold">Account</h6>
                    <p className="text-base-content/70 md:block hidden">
                      10:00 PM April 1, 2024
                    </p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative z-10 grid place-items-center w-10 h-10 rounded-full bg-base-content text-base-content  font-bold">
                  <div className="absolute md:-bottom-[4.5rem] -bottom-[3rem] w-max text-center">
                    <h6 className="font-semibold">Delivered to the Courier</h6>
                    <p className="text-base-content/70 md:block hidden">
                      10:00 PM April 3, 2024
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative z-10 grid place-items-center w-10 h-10 rounded-full bg-base-200 text-base-content font-bold">
                  <div className="absolute md:-bottom-[4.5rem] -bottom-[3rem] w-max text-right md:pr-44 pr-5">
                    <h6 className="font-semibold">Delivery</h6>
                    <p className="text-base-content/70 md:block hidden">
                      Estimated date: April 9, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Products */}
            <div className="p-6 md:px-2 pb-14 space-y-6">
              {order.orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 items-center rounded-lg p-4 shadow-xl bg-base-100"
                >
                  <img
                    src={`${import.meta.env.VITE_BACKEND_API_URL}/uploads/${item.product.image}`}
                    className="w-36 h-36 object-fit rounded-md bg-base-200"
                    alt={item.product.title}
                  />
                  <div className="text-start">
                    <h6 className="text-lg font-semibold">
                      {item.product.title}
                    </h6>
                    <p className="text-base-content/70">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="text-base-content/70">
                      Precio: ${item.product.price}
                    </p>
                    <p className="text-base-content/70">
                      Total: ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="lg:col-span-4 col-span-full space-y-6">
          {/* Summary Card */}
          <div className="relative flex flex-col rounded-md bg-base-100 text-base-content shadow border border-base-300">
            <div className="p-6">
              <p className="font-semibold">Date Ordered</p>
              <div className="my-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-base-content/70">Subtotal</p>
                  <p className="text-base-content/70">${subtotal.toFixed(2)}</p>
                </div>
              </div>
              <div className="my-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-base-content/70">Shipping estimate</p>
                  <p className="text-base-content/70">$0</p>
                </div>
              </div>
              <div className="my-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-base-content/70">Tax estimate</p>
                  <p className="text-base-content/70">$0</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-base-300 pt-4">
                <p className="font-semibold">Order Total</p>
                <p className="font-semibold">${subtotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
