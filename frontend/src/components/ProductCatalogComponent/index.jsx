import { useState } from "react";
import { useCart } from "../../context/ShoppingCartContext";
import ProductCardComponent from "../ProductCardComponent";
import SectionHeaderComponent from "../SectionHeaderComponent";
import ProductSkeletonComponent from "../ProductSkeletonComponent";

const ProductCatalogComponent = () => {
  const { products } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    ...new Map(
      products
        .filter((p) => p.category && p.category.id && p.category.name)
        .map((p) => [p.category.id, p.category])
    ).values(),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? String(product.category?.id) === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SectionHeaderComponent
        title="Products Catalog"
        content="Discover all of our Availables products"
      />

      <div className="flex justify-end gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full md:w-1/4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className={`grid sm:grid-cols-1 md:grid-cols-3 place-items-center ${filteredProducts.length > 0 ? 'animate-fade-in' : ''}`}>
        {filteredProducts.length === 0
          ? Array.from({ length: 10 }).map((_, idx) => (
              <ProductSkeletonComponent key={idx} />
            ))
          : filteredProducts.map((product) => (
              <ProductCardComponent key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default ProductCatalogComponent;
