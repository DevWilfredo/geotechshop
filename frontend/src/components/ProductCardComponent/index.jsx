import { NavLink } from "react-router";
import { useCart } from "../../context/ShoppingCartContext";
import StarRatingComponent from "../StarRatingComponent";
import toast from "react-hot-toast";

const ProductCardComponent = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="relative flex flex-col my-6 bg-base-100 shadow-md border border-base-300 rounded-lg w-80 h-96 overflow-hidden">
      <div className="relative h-full overflow-hidden bg-clip-border">
        <img
          src={`${import.meta.env.VITE_BACKEND_API_URL}/uploads/${product.image}`}
          alt={product.title}
          className="w-full h-full p-5 object-contain"
        />
      </div>

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

        <div className="flex justify-around gap-3 mt-4">
          <button
            onClick={handleAddToCart}
            className="btn btn-primary text-primary-content"
          >
            Add to cart
          </button>
          <NavLink to={`/product/${product.id}/details`} className="btn btn-outline">
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
