import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products  from "./pages/Products/Products";
import Aboutus from "./pages/AboutUs/AboutUs";
import Contactus  from "./pages/ContactUs/ContactUs";
import Termsandconditions  from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy  from "./pages/PrivacyPolicy/PrivacyPolicy";

import NoPage from "./pages/NoPage/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/terms-and-conditions" element={<Termsandconditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/testimonials" element={<Products />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
