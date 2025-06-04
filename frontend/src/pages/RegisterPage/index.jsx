import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/v1/users/register`,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
          email: data.email,
          phoneNumber: data.phoneNumber,
          password: data.password,
        },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      toast.success("Account created successfully");
      reset();
      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Error creating account"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-base-100 min-h-screen flex items-center justify-center">
      {loading && (
        <div className="fixed inset-0 bg-base-content/60 flex items-center justify-center z-50">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      <div className="w-full max-w-md bg-base-200 rounded-lg shadow border border-base-300 p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-base-content mb-6">
          Create an account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              First Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-error text-xs">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Last Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="text-error text-xs">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Phone Number
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("phoneNumber", { required: "Phone number is required" })}
            />
            {errors.phoneNumber && (
              <p className="text-error text-xs">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Age
            </label>
            <input
              type="number"
              className="input input-bordered w-full"
              {...register("age", {
                required: "Age is required",
                min: { value: 1, message: "Invalid age" },
              })}
            />
            {errors.age && (
              <p className="text-error text-xs">{errors.age.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-error text-xs">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
            />
            {errors.password && (
              <p className="text-error text-xs">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Confirm Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-error text-xs">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="flex items-start">
            <input
              id="terms"
              type="checkbox"
              className="checkbox checkbox-primary"
              {...register("terms", { required: "You must accept the terms" })}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-base-content">
              I accept the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-error text-xs">{errors.terms.message}</p>
          )}
          <button
            type="submit"
            className="w-full btn btn-primary"
            disabled={isSubmitting || loading}
          >
            Create account
          </button>
          <p className="text-sm font-light text-base-content">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-primary hover:underline">
              Sign in here
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;