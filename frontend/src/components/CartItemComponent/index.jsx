import { useCart } from "../../context/ShoppingCartContext";

const CartItemComponent = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <li className="flex py-6 border-b border-base-300">
      {/* Imagen del producto */}
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-base-300 bg-base-200">
        <img
          src={product.image}
          alt={`${product.image}-image`}
          className="size-full object-contain"
        />
      </div>

      {/* Información del producto */}
      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div className="flex justify-between text-base font-semibold text-base-content">
          <h3 className="line-clamp-1">{product.title}</h3>
          <p className="ml-4">${product.price}</p>
        </div>

        <div className="flex justify-between items-center text-sm mt-2">
          <p className="text-base-content/60">Cantidad: {product.quantity}</p>
          <button
            onClick={() => removeFromCart(product.id)}
            className="btn btn-sm btn-link text-error hover:underline"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItemComponent;
