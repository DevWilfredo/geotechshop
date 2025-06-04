import { ShoppingCartIcon, X } from "lucide-react";
import CartItemComponent from "../CartItemComponent";
import { useCart } from "../../context/ShoppingCartContext";
import { NavLink } from "react-router";

const ShoppingCartComponent = () => {
  const {cartItems, calculateCartSubtotal} = useCart();
  return (
    <div className="drawer drawer-end z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="btn btn-ghost btn-circle drawer-button"
        >
          <div className="indicator">
            <ShoppingCartIcon className="w-5 h-5 text-base-content" />
            <span className="badge badge-sm indicator-item badge-secondary">
              {cartItems.length}
            </span>
          </div>
        </label>
      </div>


      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div className="w-[90vw] max-w-sm bg-base-100 h-full flex flex-col overflow-y-auto shadow-xl">

          <div className="px-4 py-6 border-b border-base-300 flex justify-between items-center">
            <h2 className="text-lg font-medium text-base-content">
              Shopping Cart
            </h2>
            <label htmlFor="my-drawer-4" className="btn btn-sm btn-ghost">
              <X className="w-5 h-5" />
            </label>
          </div>


          <div className="flex-1 px-4 py-4">
            <ul className="divide-y divide-base-300">
              {cartItems.map((item) => (
                <CartItemComponent key={item.id} product={item} />
              ))}
            </ul>
          </div>


          <div className="border-t border-base-300 px-4 py-6">
            <div className="flex justify-between text-base font-medium text-base-content">
              <p>Subtotal</p>
              <p>${calculateCartSubtotal()}</p>
            </div>
            <p className="mt-1 text-sm text-base-content/60">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <div
                className={cartItems.length === 0 ? "tooltip w-full" : "w-full"}
                data-tip={cartItems.length === 0 ? "Agrega productos al carrito para continuar" : ""}
              >
                <NavLink
                  to='/order/overview'
                  className="btn btn-primary w-full text-base-content"
                  disabled={cartItems.length === 0}
                  tabIndex={cartItems.length === 0 ? -1 : 0}
                  onClick={() => {
                    // Cierra el drawer al hacer checkout
                    const drawer = document.getElementById("my-drawer-4");
                    if (drawer) drawer.checked = false;
                  }}
                >
                  Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartComponent;
