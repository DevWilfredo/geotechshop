import CategoriesCarouselComponent from "../../components/CategoriesCarouselComponent";
import HeroComponent from "../../components/HeroComponent";
import LogoCarousel from "../../components/LogoCarouselComponent"
import ProductCatalogComponent from "../../components/ProductCatalogComponent";

const Home = () => {
  
  return (
    <>
      <HeroComponent/>
      <LogoCarousel/>
      <CategoriesCarouselComponent/>
      <ProductCatalogComponent />
    </>
  )
};

export default Home;
