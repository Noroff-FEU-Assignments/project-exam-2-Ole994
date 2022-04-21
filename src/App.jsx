import "./styling/sass/main.scss";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Navigation from "./components/navigation/Navigation";

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
