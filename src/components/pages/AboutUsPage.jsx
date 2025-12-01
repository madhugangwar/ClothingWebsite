
const AboutUsPage = ({ theme }) => {
    const themeClass = theme === 'dark' ? 'card-dark text-white' : 'bg-white text-dark';
    return (
      <main className="container py-5">
        <div className={`p-5 rounded-4 shadow-lg ${themeClass}`}>
          <h1 className="display-4 head-colr mb-4">About Us</h1>
          <p className="lead">
            Welcome to TrendyThreads, where you will find stunning, fashion-conscious, and sustainable clothes for the whole family.
          </p>
          <hr className="my-4" />
          <h2 className="text-info">Our Philosophy</h2>
          <p>
            We believe in **slow fashion** — creating clothes that last, are ethically made, and good for the environment.
          </p>
          <h2 className="text-info mt-4">TrendyThreads Promise</h2>
          <ul className="list-group list-group-flush mb-4 rounded-3 overflow-hidden">
            <li className={`list-group-item ${theme === 'dark' ? 'list-group-item-dark' : ''}`}>Premium Fabric: We only use 100% natural and high-grade fabrics.</li>
            <li className={`list-group-item ${theme === 'dark' ? 'list-group-item-dark' : ''}`}>Ethical Production: Supporting fair wages and safe environment.</li>
            <li className={`list-group-item ${theme === 'dark' ? 'list-group-item-dark' : ''}`}>Customer First Priority: Your satisfaction is our greatest priority.</li>
          </ul>
          <p className="text-muted small">
            Thank you for choosing TrendyThreads and being part of our journey towards a sustainable future.
          </p>
        </div>
      </main>
    );
  };
export default AboutUsPage;
