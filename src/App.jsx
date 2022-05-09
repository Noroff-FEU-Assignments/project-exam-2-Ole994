import "./styling/sass/main.scss";
import Home from "../src/pages/Home";
import Detail from "../src/pages/Detail";
// import Enquiry from "./pages/Enquiry";
import Contact from "../src/pages/Contact";
import Admin from "../src/pages/Admin";
import Login from "../src/pages/Login";
import Result from "../src/pages/Result";
import Booking from "../src/pages/Booking";
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
          <Route path="/Booking" element={<Booking />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
