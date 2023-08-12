import React from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function DefaultTemplate({ children }) {
  return (
    <>
      <Header />
      <div className="overflow-hidden">{children}</div>
      <Footer />
    </>
  );
}

export default DefaultTemplate;
