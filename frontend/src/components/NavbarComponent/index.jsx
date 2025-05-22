import MenuLinkComponent from "../MenuLinkComponent";
import ShoppingCartComponent from "../ShoppingCartComponent";
import ThemeTogglerComponent from "../ThemeTogglerComponent";
import UserDropdownComponent from "../UserDropdownComponent";

const navbarMenuItems = [
  { link: "/", title: "Home" },
  { link: "/categories", title: "Categories" },
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
];

const NavbarComponent = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-primary">GeotechShop</a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navbarMenuItems.map((item, index) => (
            <MenuLinkComponent key={index} link={item.link} text={item.title} />
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-7">
        <div className="flex">
          {/*Theme Toggler Button*/}
          <ThemeTogglerComponent />

          {/* Cart Dropdown */}
          <ShoppingCartComponent />

          {/* Avatar Dropdown */}
          <UserDropdownComponent />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
