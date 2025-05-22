import { useCart } from "../../context/ShoppingCartContext";
import ProductCardComponent from "../ProductCardComponent";
import SectionHeaderComponent from "../SectionHeaderComponent";

const ProductCatalogComponent = () => {
  const { products } = useCart();
  return (
    <>
      <SectionHeaderComponent
        title="Products Catalog"
        content="Discover all of our Availables products"
      />
      <div className="grid grid-cols-3 place-items-center">
        {products.map((product) => (
          <ProductCardComponent product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductCatalogComponent;
