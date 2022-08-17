import React, { Children } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { SideMenu } from "../side-menu/SideMenu";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {" "}
      {/* header */} <Header />
      {/* sidebar */}
      <SideMenu />
      {/* main body */}
      <main style={{ minHeight: "calc(100vh - 200px)" }} className="container">
        {" "}
        {children}{" "}
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};
