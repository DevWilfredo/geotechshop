import { useState } from "react";
import { useCart } from "../../context/ShoppingCartContext";
import ProductOptionsComponent from "../../components/ProductOptionsComponent";
import CheckoutButton from "../../components/CheckoutButtonComponent";

const Cart = () => {
  const { cartItems } = useCart();
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (productId, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: value,
    }));
  };

  const optionsTotal =
    Object.values(selectedOptions).filter(Boolean).length * 25;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const total = subtotal + optionsTotal;

  return (
    <div className="p-4 md:p-10 grid md:grid-cols-3 gap-6 bg-base-100 text-base-content mt-12">
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cartItems.map((product) => (
          <div key={product.id} className="card bg-base-200 shadow-md">
            <div className="card-body">
              <div className="flex items-start gap-4">
                <img
                  src={`${import.meta.env.VITE_BACKEND_API_URL}/uploads/${product.image}`}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <span className="font-bold text-lg">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-sm">Delivery on 12/02/2005</p>
                  <div className="flex items-center gap-4 mt-2">
                    <select className="select select-sm select-bordered w-20">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (num) => (
                          <option key={num} selected={num === product.quantity}>
                            {num}
                          </option>
                        )
                      )}
                    </select>
                    <button className="btn btn-sm btn-error">Remove</button>
                  </div>
                  {product.options && product.options.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <span className="text-sm font-medium">
                        Select an option (adds $25):
                      </span>
                      <ProductOptionsComponent
                        options={product.options}
                        selected={selectedOptions[product.id] || ""}
                        onChange={(optionId) => {
                          if (selectedOptions[product.id] === optionId) {
                            handleOptionChange(product.id, "");
                          } else {
                            handleOptionChange(product.id, optionId);
                          }
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h3 className="text-xl font-semibold">Summary</h3>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Options Adicional</span>
            <span>${optionsTotal}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <CheckoutButton items={cartItems} />
          <p className="text-sm mt-2">
            One or more items in your cart require an account.{" "}
            <a href="#" className="link link-primary">
              Sign in or create an account now.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
