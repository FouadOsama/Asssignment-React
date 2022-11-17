import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

function MainLayout() {
  return (
    <div className="section d-flex flex-column justify-content-between">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default MainLayout;
