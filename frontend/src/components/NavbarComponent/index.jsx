import { Link } from "react-router";

import ShoppingCartComponent from "../ShoppingCartComponent";
import ThemeTogglerComponent from "../ThemeTogglerComponent";
import UserDropdownComponent from "../UserDropdownComponent";
import { useAuth } from "../../context/AuthContext";

const NavbarComponent = () => {
  const { user } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl text-primary">
          GeotechShop
        </Link>
      </div>

      <div className="navbar-end gap-7">
        <div className="flex items-center gap-4">
          <ThemeTogglerComponent />
          <ShoppingCartComponent />
          {user ? (
            <UserDropdownComponent />
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
