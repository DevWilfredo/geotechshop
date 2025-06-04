import { useForm } from "react-hook-form";
import axios from "axios";
import { CircleUserRound } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      age: user?.age || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/v1/users/${user.id}`,
        data,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      toast.success("Profile updated successfully");
      reset(data);
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      toast.error("Error updating profile");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto mt-24 space-y-8 border border-base-content/65 shadow shadow-base-content rounded-md p-12"
    >
      <h2 className="text-lg font-semibold text-base-content">Profile</h2>
      <div className="flex items-center gap-x-3 mb-6">
        <CircleUserRound
          aria-hidden="true"
          className="size-12 text-base-content"
        />
        <span className="font-medium">{user?.email}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-sm font-medium text-base-content"
            htmlFor="firstName"
          >
            First name
          </label>
          <input
            id="firstName"
            className="input input-bordered w-full bg-base-100 text-base-content"
            {...register("firstName", { required: "Required" })}
          />
          {errors.firstName && (
            <span className="text-error text-xs">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-medium text-base-content"
            htmlFor="lastName"
          >
            Last name
          </label>
          <input
            id="lastName"
            className="input input-bordered w-full bg-base-100 text-base-content"
            {...register("lastName", { required: "Required" })}
          />
          {errors.lastName && (
            <span className="text-error text-xs">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-medium text-base-content"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="input input-bordered w-full bg-base-100 text-base-content"
            {...register("email", { required: "Required" })}
          />
          {errors.email && (
            <span className="text-error text-xs">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-medium text-base-content"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            className="input input-bordered w-full bg-base-100 text-base-content"
            {...register("phoneNumber")}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-base-content"
            htmlFor="age"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            className="input input-bordered w-full bg-base-100 text-base-content"
            {...register("age")}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => reset()}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default ProfilePage;
