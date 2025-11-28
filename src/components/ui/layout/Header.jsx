// =========================
// UPDATED HEADER COMPONENT
// =========================

const Header = ({ page, cartCount, wishlistCount, handleNavClick, theme, toggleTheme }) => {

  const isDark = theme === "dark";

  return (
    <nav
      className={`navbar navbar-expand shadow-lg sticky-top ${
        isDark ? "bg-dark" : "bg-custom-primary"
      }`}
    >
      <div className="container-fluid d-flex flex-wrap justify-content-between">

        {/* Brand */}
        <button
          className="navbar-brand btn btn-link text-decoration-none"
          onClick={() => handleNavClick("Home")}
          style={{ background: "transparent", border: "none" }}
        >
          <span className="fw-bold brand-title" style={{ fontSize: "1.6rem" }}>
            TrendyThreads
          </span>
        </button>

        {/* Nav Links */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-end me-2">

            {[
              { name: "Home", page: "Home" },
              { name: "About Us", page: "About Us" },
              { name: "Wishlist", page: "Wishlist", count: wishlistCount },
              { name: "Cart", page: "Cart", count: cartCount },
              { name: "Contact", page: "Contact" },
            ].map((link) => (
              <li className="nav-item me-2" key={link.page}>
                <button
                  onClick={() => handleNavClick(link.page)}
                  className={`nav-link px-2 py-1 text-decoration-none ${
                    page === link.page ? "nav-active fw-bold" : "nav-normal"
                  } position-relative`}
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                >
                  {link.name}

                  {/* Badge Count */}
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

          {/* Theme Toggle */}
          <button
            className={`btn btn-sm ms-2 ${
              isDark ? "text-warning" : "text-custom-accent"
            }`}
            onClick={toggleTheme}
          >
            <i
              className={`bi ${
                isDark ? "bi-sun-fill" : "bi-moon-stars-fill"
              } h5 mb-0`}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
