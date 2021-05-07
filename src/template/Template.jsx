import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/Navbar";

const HomeLayout = (props) => {
  return (
    <>
      <NavBar />
      <div className="wrap-children" style={{"padding":'50px 0'}}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};
export default function Template({ Component, ...props }) {
  return (
    <>
      <Route
        {...props}
        render={(propsCompnent) => (
          <HomeLayout>
            <Component propsCompnent={{ ...propsCompnent }} />
          </HomeLayout>
        )}
      />
    </>
  );
}
