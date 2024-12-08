import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <>
      <HelmetProvider>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
        <Tooltip id="my-tooltip" />
        <ToastContainer />
      </HelmetProvider>
    </>
  );
};

export default MainLayout;
