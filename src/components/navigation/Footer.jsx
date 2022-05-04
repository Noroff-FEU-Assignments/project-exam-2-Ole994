// import logo from "../../pictures/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerHeader">{/* <h2>Holidaze</h2> */}</div>
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
                nobis repellat veniam,
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
          {""}
          <div className="r-footer">
            <div className="attractions">
              <div className="attractions-header">
                <h3>Attraksjoner i Bergen</h3>
              </div>
              {""}
              <ul>
                <li className="attractions-list">
                  <a href="https://www.akvariet.no/">Akvariet</a>
                </li>
                <li className="attractions-list">
                  <a href="https://www.visitbergen.com/ting-a-gjore/bryggen-i-bergen-p878553">
                    Besøke bryggen
                  </a>
                </li>
                <li className="attractions-list">
                  <a href="https://www.floyen.no/">Tur opp Fløyen</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyRights">
          <h3>Holidaze</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
