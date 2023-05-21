import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <body>
      <NavBar />
      <SideBar />
      <main id="main" class="main">
        {children}
      </main>
    </body>
  );
};

export default Layout;
