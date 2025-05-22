import { NavLink } from "react-router";
import { useCart } from "../../context/ShoppingCartContext";
import StarRatingComponent from "../StarRatingComponent";

const ProductCardComponent = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="relative flex flex-col my-6 bg-base-100 shadow-md border border-base-300 rounded-lg w-80 h-96 overflow-hidden">
      {/* Imagen */}
      <div className="relative h-full overflow-hidden bg-clip-border">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full p-5 object-contain"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <StarRatingComponent />
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-base-content text-lg font-semibold truncate">
              {product.title}
            </p>
            <p className="text-base-content text-lg font-bold">
              ${product.price}
            </p>
          </div>
          <p className="text-sm text-base-content line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Botones */}
        <div className="flex justify-around gap-3 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary text-primary-content"
          >
            Agregar al carrito
          </button>
          <NavLink to={`/product/${product.id}/details`} className="btn btn-outline">
            Detalles
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
