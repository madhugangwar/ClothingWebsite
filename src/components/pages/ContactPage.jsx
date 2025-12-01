const ContactPage = ({ theme }) => {
  const themeClass =
    theme === "dark" ? "card-dark text-white" : "bg-white text-dark";

  return (
    <main className="container py-5">
      <div className={`p-5 rounded-4 shadow-lg ${themeClass}`}>
        <h1 className="display-4 head-colr mb-4">Contact Us</h1>
        <p className="lead">
          We would love to hear from you! Contact us through the details
          provided below.
        </p>

        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <h4 className="text-info mb-3">
              <i className="bi bi-info-circle me-2"></i> Our Information
            </h4>
            <ul className="list-group list-group-flush rounded-3 overflow-hidden">
              <li
                className={`list-group-item ${
                  theme === "dark" ? "list-group-item-dark" : ""
                }`}
              >
                <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                <strong>Address:</strong> 123, Fashion Street, Commercial Hub,
                New Delhi, India 110001
              </li>
              <li
                className={`list-group-item ${
                  theme === "dark" ? "list-group-item-dark" : ""
                }`}
              >
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li
                className={`list-group-item ${
                  theme === "dark" ? "list-group-item-dark" : ""
                }`}
              >
                <i className="bi bi-envelope-fill me-2 text-info"></i>
                <strong>Email:</strong> support@ekclothing.in
              </li>
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <h4 className="text-info mb-3">
              <i className="bi bi-map-fill me-2"></i> Find Us
            </h4>
            <div
              className="ratio ratio-16x9 rounded-3 shadow-sm overflow-hidden"
              style={{ backgroundColor: theme === "dark" ? "#333" : "#e9ecef" }}
            >
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.72506661549667!3d20.750309395263466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
