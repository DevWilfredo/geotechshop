import CategoriesCarouselComponent from "../../components/CategoriesCarouselComponent";
import HeroComponent from "../../components/HeroComponent";
import LogoCarousel from "../../components/LogoCarouselComponent"
import ProductCatalogComponent from "../../components/ProductCatalogComponent";

const Home = () => {
  
  return (
    <div className="animate-fade-in">
      <HeroComponent/>
      <LogoCarousel/>
      <CategoriesCarouselComponent/>
      <ProductCatalogComponent />
    </div>
  )
};

export default Home;
