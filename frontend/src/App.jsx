import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";
import OrderHistory from "./pages/OrderHistory";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OrderDetails from "./pages/OrderDetails";
import Cart from "./pages/Cart";
import SuccessPayment from "./pages/SuccessPayment";
import ErrorPayment from "./pages/ErrorPayment";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRouteComponent";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id/details" element={<ProductDetail />} />
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <OrderHistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/orders/:orderId"
            element={
              <PrivateRoute>
                <OrderDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/order/overview"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/successpayment"
            element={
              <PrivateRoute>
                <SuccessPayment />
              </PrivateRoute>
            }
          />
          <Route
            path="/errorpayment"
            element={
              <PrivateRoute>
                <ErrorPayment />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
