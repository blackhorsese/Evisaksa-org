import React from "react";
import { useLocation } from "react-router-dom";
import Asia from "../component/asia";
import Banner from "../component/banner";
import Description from "../component/description";
import Discover from "../component/discover";
import Europe from "../component/europe";
import Footer from "../component/footer";
import Blog from "../component/step/blog";
import FAQ from "../component/step/faqs";
import "../pages/style.css";

function Landing() {
  const location = useLocation();
  console.log("some path", location.pathname);
  return (
    <>
      <Banner color={location.pathname} />
      <Description />
      <Europe />
      <Asia />
      <Blog/>
      <Discover />
      <FAQ/>
      <Footer />
    </>
  );
}

export default Landing;
