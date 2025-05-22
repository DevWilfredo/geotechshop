import { NavLink } from "react-router";

const MenuLinkComponent = ({ link, text }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-primary text-base-100 transition-all"
            : "text-base-content transition-all"
        }
        to={link}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default MenuLinkComponent;
