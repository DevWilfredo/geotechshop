import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useState } from "react";

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await login(data.email, data.password);

    if (res.success) {
      toast.success("Inicio de sesión exitoso");
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1000);
    } else {
      setLoading(false);
      toast.error('Algo salió mal. Verifica tus credenciales.');
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-base-content/60 flex items-center justify-center z-50">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      <section className="bg-base-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-base-content"
          >
            GeotechShop
          </a>
          <div className="w-full bg-base-200 rounded-lg shadow border border-base-300 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-base-content md:text-2xl">
                Inicia Sesión en tu cuenta
              </h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-base-content"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input input-bordered w-full"
                    placeholder="nombre@compañia.com"
                    {...register("email", {
                      required: "El email es obligatorio",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-base-content"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="input input-bordered w-full"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    Recordarme
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <button type="submit" className="w-full btn btn-primary" disabled={loading}>
                  Iniciar Sesión
                </button>

                <p className="text-sm font-light text-base-content">
                  ¿Aún no tienes una cuenta?{" "}
                  <NavLink
                    to='/register'
                    className="font-medium text-primary hover:underline"
                  >
                    Registrarme
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginFormComponent;
