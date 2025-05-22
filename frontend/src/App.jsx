import { Route, Routes } from "react-router";
import NavbarComponent from "./components/NavbarComponent";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetails";
import OrderHistory from "./pages/OrderHistory";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:id/details" element={<ProductDetail/>} />
          <Route path="/orders" element={<OrderHistory/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
