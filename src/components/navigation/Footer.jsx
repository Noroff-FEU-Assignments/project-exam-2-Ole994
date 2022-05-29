// import logo from "../../pictures/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h1>Holidaze</h1>
            <p>Our hotels in Bergen have been ranked as one of the best </p>
          </div>

          <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="Contact">
                <li>Contact</li>
              </Link>
              <Link to="Result">
                <li>Result</li>
              </Link>
              <Link to="Booking">
                <li>Booking page</li>
              </Link>
              <Link to="Login">
                <li>Login</li>
              </Link>
            </ul>
          </div>

          <div className="footer-items">
            <h3>Things to do in Bergen</h3>
            <div className="border1"></div>
            <ul>
              <li>Wisit Fløyen, a nice mountain</li>

              <li>Wisit the fishing market</li>

              <li>Walk up Stolzekleiven</li>
            </ul>
          </div>

          <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>Holidaze
                as
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>9088866
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                Holidaze@bergen.no
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">Copyright &copy; Holidaze 2022.</div>
    </>
  );
};

export default Footer;
