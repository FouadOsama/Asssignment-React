import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar my-nav d-flex justify-content-end align-content-center">
        <div className="container">
          <Link className=" text-white fw-bolder navbar-brand fs-3" to="/">
            START REACT
          </Link>
          <div className="buttons">
            <Link
              to="portfolio"
              className=" fw-bold text-decoration-none text-white m-2 mt-0"
            >
              PORTFOLIO
            </Link>
            <Link
              to="about"
              className="fw-bold text-decoration-none text-white m-2 mt-0"
            >
              ABOUT
            </Link>
            <Link
              to="contact"
              className=" fw-bold text-white text-decoration-none m-2 mt-0"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
