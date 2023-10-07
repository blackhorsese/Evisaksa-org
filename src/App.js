import "./App.css";
import React from "react";
import Landing from "./pages/landing";
import "../src/font/stylesheet.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Policy from "./pages/policy";
import Terms from "./pages/terms";
import Info from "./pages/info";
import Visa from "./pages/visa";
import Register from "./pages/register";
import Passport from "./component/step/passport";
import Medical from "./component/step/medical";
import Application from "./component/step/application-review";
import Method from "./component/step/method";
import Contact from "./component/step/contact";
import Conditions from "./component/step/conditions";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<Policy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/important-info" element={<Info />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/application-review" element={<Application />} />
          <Route path="/method" element={<Method />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
