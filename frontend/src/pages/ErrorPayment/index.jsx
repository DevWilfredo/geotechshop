// src/pages/SuccessPage.jsx
import { TriangleAlert } from "lucide-react";
import { NavLink } from "react-router";

const ErrorPayment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center px-4">
      <TriangleAlert className="w-16 h-16 text-red-500 mb-6" />

      <h1 className="text-3xl font-bold text-primary mb-2">
        Error
      </h1>
      <p className="text-base text-gray-500 mb-6 max-w-md">
        Have been an Error processing your Payment, Try again later.
      </p>

      <NavLink
        to="/"
        className=" rounded px-6 py-2"
      >
        <button className="btn btn-primary">Go to home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPayment