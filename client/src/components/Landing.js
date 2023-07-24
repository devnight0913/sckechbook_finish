import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer";

const Landing = () => {

  return (
    <div>
      <Navbar />
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Skech Book</h1>

            <p className="lead">
              Create developer profile/portfolio, share posts and interact with
              other developers
            </p>

            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>

              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};


export default Landing;
