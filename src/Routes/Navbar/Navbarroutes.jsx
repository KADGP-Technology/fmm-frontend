import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";
import Navbar from "../../Layouts/Navbar/Navbar";

export const Navbarroutes = ({ hideHeaderPaths = [] }) => {
  const { pathname } = useLocation();

  return (
    <>
      {!hideHeaderPaths.includes(pathname) && <Navbar />}
      <Outlet />
      {!hideHeaderPaths.includes(pathname) && <Footer />}
    </>
  );
};
