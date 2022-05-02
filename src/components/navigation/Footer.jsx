import logo from "../../pictures/logo.svg";

const Footer = () => {
  return (
    <>
      {/* <footer className="footer">
        <div className="l-footer">
          <h1>
            <img src={logo} alt="" />
          </h1>
          <p>
            Velkommen til Holidaze, et av Bergens mest utsiktsfylte hotell.{" "}
          </p>
        </div>
        <ul className="r-footer">
          <li>
            <h2>Soiale</h2>
            <ul className="box">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </li>
          <li className="features">
            <h2>Attraksjoner</h2>
            <ul className="box h-box">
              <li>
                <a href="#">Svømmebasseng</a>
              </li>
              <li>
                <a href="#">Bar</a>
              </li>
              <li>
                <a href="#">kaffè</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              {/* <li>
                <a href="#">Certifications</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li> */}
      {/* </ul>
          </li> */}
      {/* <li>
            <h2>Legal</h2>
            <ul className="box">
              <li>
                <a href="/src/components/pages/Contact.jsx">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contract</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="b-footer">
          <p>All rights reserved by ©Holydaze 2022 </p>
        </div>
      </footer> */}

      <footer>
        <div className="footerHeader">
          <h2>Holidaze</h2>
        </div>
        {""}
        {""}
        <div className="footer-container">
          {""}
          {""}
          <div className="l-footer">
            <div className="about">
              <h3>Om hotellet</h3>
            </div>

            <div className="about-text-footer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                nobis repellat veniam, hic corporis officiis ullam laborum
                cupiditate mollitia. Repellat, esse blanditiis eligendi magnam
                hic error modi perspiciatis magni illum?
              </p>
            </div>
          </div>
          {""}
          <div className="m-footer">
            <div className="about">
              <h3>Sider</h3>
            </div>

            <div className="pages-footer">
              <ul>
                <li>
                  <a href="/src/components/pages/Detail.jsx">Hjem</a>
                </li>
                <li>
                  <a href="/src/components/pages/Detail.jsx">Hotellrom</a>
                </li>
                <li>
                  <a href="/src/components/pages/Detail.jsx">Kontakt</a>
                </li>
                <li>
                  <a href="/src/components/pages/Detail.jsx">Login</a>
                </li>
                <li>
                  <a href="/src/components/pages/Detail.jsx">Bestill</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
