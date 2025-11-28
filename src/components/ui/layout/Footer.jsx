// =========================
// UPDATED FOOTER COMPONENT
// =========================

const Footer = ({ handleNavClick, theme }) => {
  const isDark = theme === "dark";

  const footerStyle = {
    backgroundColor: isDark ? "#1a1a1a" : "#0d3b66",
    color: isDark ? "#ffffff" : "#f4d35e",
  };

  const linkStyle = {
    color: isDark ? "#f8f9fa" : "#f4d35e",
    textDecoration: "none",
    cursor: "pointer",
  };

  const iconStyle = {
    color: isDark ? "#ffc107" : "#f4d35e",
  };

  return (
    <footer className="py-4 shadow-lg border-top" style={footerStyle}>
      <div className="container">
        <div className="row">

          {/* Left Section */}
          <div className="col-md-4 mb-3">
            <h5 style={{ color: isDark ? "#faebbdff" : "#f4d35e" }}>
              TrendyThreads
            </h5>
            <p className="small">Fashion with a conscience. Wear your style.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {["Home", "About Us", "Wishlist", "Cart", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleNavClick(item)}
                    style={linkStyle}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-4 mb-3">
            <h5>Connect</h5>
            <div className="d-flex h4">
              <a href="#" className="me-3" style={iconStyle}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="me-3" style={iconStyle}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="me-3" style={iconStyle}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <p
          className="text-center small mt-3 mb-0 pt-2 border-top"
          style={{
            borderColor: isDark ? "#ffc107" : "#f4d35e",
          }}
        >
          © {new Date().getFullYear()} TrendyThreads. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
