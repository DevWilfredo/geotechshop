import React, { useState } from "react";
import { useCart } from "../../context/ShoppingCartContext"; // Ajusta la ruta según tu proyecto

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const { cartItems, calculateCartSubtotal } = useCart();

  return (
    <div className="min-h-screen bg-base-200 p-12 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Information */}
          <div className="card bg-base-100 shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Contact information</h2>
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full mb-4"
            />
          </div>

          {/* Shipping Information */}
          <div className="card bg-base-100 shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Company"
                className="input input-bordered w-full md:col-span-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full md:col-span-2"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc."
                className="input input-bordered w-full md:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="input input-bordered w-full"
              />
              <select className="select select-bordered w-full">
                <option>United States</option>
                <option>Canada</option>
              </select>
              <input
                type="text"
                placeholder="State / Province"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Postal code"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered w-full md:col-span-2"
              />
            </div>
          </div>

          {/* Delivery Method */}
          <div className="card bg-base-100 shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Delivery method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`border rounded-lg p-4 cursor-pointer flex items-center justify-between ${
                  deliveryMethod === "standard"
                    ? "border-primary ring-2 ring-primary"
                    : ""
                }`}
                onClick={() => setDeliveryMethod("standard")}
              >
                <div>
                  <p className="font-medium">Standard</p>
                  <p className="text-sm text-base-content/70">
                    4–10 business days
                  </p>
                </div>
                <p className="font-semibold">$5.00</p>
              </div>
              <div
                className={`border rounded-lg p-4 cursor-pointer flex items-center justify-between ${
                  deliveryMethod === "express"
                    ? "border-primary ring-2 ring-primary"
                    : ""
                }`}
                onClick={() => setDeliveryMethod("express")}
              >
                <div>
                  <p className="font-medium">Express</p>
                  <p className="text-sm text-base-content/70">
                    2–5 business days
                  </p>
                </div>
                <p className="font-semibold">$16.00</p>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="card bg-base-100 shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Payment</h2>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-4">
                <input
                  type="radio"
                  name="payment"
                  className="radio checked:bg-primary"
                  checked
                />
                <span className="label-text">Credit card</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Card number"
                className="input input-bordered w-full md:col-span-2"
              />
              <input
                type="text"
                placeholder="Name on card"
                className="input input-bordered w-full md:col-span-2"
              />
              <input
                type="text"
                placeholder="Expiration date (MM/YY)"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="CVC"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="card bg-base-100 shadow p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order summary</h2>
          <div className="space-y-4">
            {cartItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-center border-b pb-4">
                <img
                  src={`${import.meta.env.VITE_BACKEND_API_URL}/uploads/${item.image}`}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-medium mt-1">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div>
                  <span className="select select-bordered w-16 h-10 flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 text-sm text-base-content">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${calculateCartSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${calculateCartSubtotal()}</span>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-6">Confirm order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
