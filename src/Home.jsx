import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center" style={{ 
        background: "url('https://source.unsplash.com/1600x900/?grocery,market') center/cover", 
        height: "60vh"
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold text-dark">Welcome to Fresh Mart 🛒</h1>
          <p className="lead text-dark">Your One-Stop Online Grocery Store</p>
          <Link to="/veg" className="btn btn-lg btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container text-center my-5">
        <h2 className="fw-bold mb-4">Shop by Category</h2>
        <div className="row">
          {/* Veg Items */}
          <div className="col-md-4">
            <div className="card">
              <img src="veg.webp" className="card-img-top" alt="Veg" />
              <div className="card-body">
                <h5 className="card-title">Vegetables 🥕</h5>
                <Link to="/veg" className="btn btn-success">Explore</Link>
              </div>
            </div>
          </div>
          {/* Non-Veg Items */}
          <div className="col-md-4">
            <div className="card">
              <img src="nonveg.webp" className="card-img-top" alt="Non-Veg" />
              <div className="card-body">
                <h5 className="card-title">Non-Veg 🍗</h5>
                <Link to="/nonveg" className="btn btn-danger">Explore</Link>
              </div>
            </div>
          </div>
          {/* Milk Items */}
          <div className="col-md-4">
            <div className="card">
              <img src="milk.webp" className="card-img-top" alt="Milk" />
              <div className="card-body">
                <h5 className="card-title">Dairy & Milk 🥛</h5>
                <Link to="/milk" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Why Shop With Us?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <i className="fa-solid fa-truck-fast fa-3x text-primary"></i>
              <h5 className="mt-3">Fast Delivery</h5>
              <p>Get your groceries delivered in no time.</p>
            </div>
            <div className="col-md-4">
              <i className="fa-solid fa-cart-shopping fa-3x text-success"></i>
              <h5 className="mt-3">Fresh & Organic</h5>
              <p>Handpicked fresh items straight to your doorstep.</p>
            </div>
            <div className="col-md-4">
              <i className="fa-solid fa-money-bill-wave fa-3x text-warning"></i>
              <h5 className="mt-3">Best Prices</h5>
              <p>Affordable prices & exclusive deals daily.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
