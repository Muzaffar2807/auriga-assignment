import React from "react";
import "./AppLayout.scss";

import Header from "./Header";
import Footer from "./Footer";

const AuthLayout = (props) => {
  return (
    <div className="main-layout">
      <div className="app-layout">
        <div className="content-main">
          <div className="header-layout">
            <Header />
          </div>
          <div className="content-layout">{props.children}</div>
          <div className="footer-layout">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
