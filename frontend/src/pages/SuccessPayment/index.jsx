// src/pages/SuccessPage.jsx
import { CheckCircle } from "lucide-react";
import { NavLink } from "react-router";

const SuccessPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center px-4 animate-fade-in">
      <CheckCircle className="w-16 h-16 text-green-500 mb-6" />

      <h1 className="text-3xl font-bold text-primary mb-2">
        Payment Successful
      </h1>
      <p className="text-base text-gray-500 mb-6 max-w-md">
        Your payment has been complete succesfully. The delivery will taxe 2-4 days to arrive
      </p>

      <NavLink
        to="/orders"
        className=" rounded px-6 py-2"
      >
        <button className="btn btn-primary">Ver mis Ordenes</button>
      </NavLink>
    </div>
  );
};

export default SuccessPayment