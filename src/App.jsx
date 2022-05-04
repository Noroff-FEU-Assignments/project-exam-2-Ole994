import "./styling/sass/main.scss";
import Home from "../src/pages/Home";
import Detail from "../src/pages/Detail";
import Admin from "../src/pages/Admin";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Result from "../src/pages/Result";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/navigation/Footer";

import {
  //routes
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//pages

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        {""}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Detail/:id" element={<Detail />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Result" element={<Result />}></Route>
          {/* <Route path="/Search" element={<Search />}></Route> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
