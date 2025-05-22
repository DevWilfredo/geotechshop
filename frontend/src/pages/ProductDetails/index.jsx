import { useParams } from "react-router";
import { useCart } from "../../context/ShoppingCartContext";
import BreadCrumbComponent from "../../components/BreadCrumbComponent";
import ColorSelectorComponent from "../../components/ColorSelectorComponent";
import ProductOptionsComponent from "../../components/ProductOptionsComponent";
import ProductCharacteristicsComponent from "../../components/ProductCharacteristicsComponent";
import ProductDeliveryInfo from "../../components/ProductDeliveryInfo";
import SectionHeaderComponent from "../../components/SectionHeaderComponent";
import ProductCarouselComponent from "../../components/ProductsCarouselComponent";

const colors = [
  "bg-black",
  "bg-purple-500",
  "bg-yellow-600",
  "bg-red-400",
  "bg-gray-500",
];

const ProductDetail = () => {
  const { id } = useParams();
  const { findSingleProduct, addToCart, products } = useCart();
  const product = findSingleProduct(parseInt(id));
  return (
    <>
      <section className="py-2 antialiased bg-base-100 text-base-content">
        <BreadCrumbComponent title={product.title} />
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-5">
          <div className="md:col-span-5 md:mt-0 md:flex justify-center items-center">
            <img
              className="h-96 object-contain"
              src={product.image}
              alt="shopping illustration"
            />
          </div>

          <div className="content-start justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:max-w-2xl md:text-5xl xl:text-6xl text-base-content">
              {product.title}
            </h1>

            <div className="flex gap-4 items-center">
              <h3 className="text-3xl font-bold text-primary">
                $ {product.price}
              </h3>
              <h3 className="text-2xl font-semibold text-gray-400 line-through">
                $ {product.price + 200}
              </h3>
            </div>

            <ColorSelectorComponent colors={colors} />

            <ProductOptionsComponent options={product.options} />

            <ProductCharacteristicsComponent
              characteristics={product.characteristics}
            />

            <div className="mt-4">
              <p className="text-base-content">{product.description}</p>
            </div>

            <div className="flex gap-4 justify-around items-center mt-6">
              <button className="btn btn-outline btn-wide">
                Add to wishlist
              </button>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-wide btn-neutral"
              >
                Add to cart
              </button>
            </div>
            <ProductDeliveryInfo />
          </div>
        </div>
      </section>

      <section>
        <SectionHeaderComponent
          title="Related Products"
          content="Discover more products that suit your style"
        />
        <ProductCarouselComponent products={products} />
      </section>
    </>
  );
};

export default ProductDetail;
