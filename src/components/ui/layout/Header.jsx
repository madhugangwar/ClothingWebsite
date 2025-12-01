
import React, { useState } from "react";
import "../../../styles/Header.css";


const Header = ({ page, cartCount, wishlistCount, handleNavClick, theme, toggleTheme }) => {
  const isDark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand shadow-lg sticky-top ${
        isDark ? "bg-dark" : "bg-custom-primary"
      }`}
    >
      <div className="container-fluid d-flex flex-wrap justify-content-between">

        <button
          className="navbar-brand btn  btn-link text-decoration-none"
          onClick={() => handleNavClick("Home")}
          style={{ background: "transparent", border: "none" }}
        >
          <span className="fw-bold brand-title" style={{ fontSize: "1.6rem"}}>
            TrendyThreads
          </span>     
      
          <button
            className={`btn btn-sm ms-lg-2 mt-3 mt-lg-0 ${
              isDark ? "text-warning" : "text-custom-accent"
            }`}
            onClick={toggleTheme}
          >
            <i className={`bi ${isDark ? "bi-sun-fill" : "bi-moon-stars-fill"} h4 mb-0`}></i>
          </button>


        </button>
        
        <button
          className="burger-btn d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} h3`}></i>
        </button>

        <div className={`menu-container ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-nav flex-column flex-lg-row align-items-lg-center me-2">
            {[
              { name: "Home", page: "Home" },
              { name: "About Us", page: "About Us" },
              { name: "Wishlist", page: "Wishlist", count: wishlistCount },
              { name: "Cart", page: "Cart", count: cartCount },
              { name: "Contact", page: "Contact" },
            ].map((link) => (
              <li className="nav-item me-lg-2 my-2 my-lg-0" key={link.page}>
                <button
                  onClick={() => {
                    handleNavClick(link.page);
                    setMenuOpen(false);
                  }}
                  className={`nav-link px-2 py-1 text-decoration-none ${
                    page === link.page ? "nav-active fw-bold" : "nav-normal"
                  } position-relative`}
                  style={{ background: "transparent", border: "none" }}
                >
                  {link.name}

                  {link.count > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.6rem" }}
                    >
                      {link.count}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;