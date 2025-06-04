import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router";

const UserDropdownComponent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const firstLetter = user?.firstName?.charAt(0)?.toUpperCase() || "U";
  const avatarUrl = `https://placehold.co/400x400?text=${firstLetter}`;

  const handleLogout = () => {
    logout(); 
    toast.success("Cierre de Sesion Exitoso");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img alt="User avatar" src={avatarUrl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <NavLink to='/profile' className="justify-between text-base-content hover:text-primary">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-base-content hover:text-primary"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdownComponent;
