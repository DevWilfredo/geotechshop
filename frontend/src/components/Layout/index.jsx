import { Outlet } from "react-router";
import NavbarComponent from "../NavbarComponent";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="flex-1 flex justify-center p-4 mt-24">
        <div className="w-full max-w-7xl">{<Outlet />}</div>
      </main>
    </div>
  );
};

export default Layout;
