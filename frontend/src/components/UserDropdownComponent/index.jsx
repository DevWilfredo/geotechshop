import React from "react";

const UserDropdownComponent = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between text-base-content hover:text-primary">
            Profile
            <span className="badge badge-primary text-primary-content">
              New
            </span>
          </a>
        </li>
        <li>
          <a className="text-base-content hover:text-primary">Settings</a>
        </li>
        <li>
          <a className="text-base-content hover:text-primary">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdownComponent;
