import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const HomeLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};
export default function HomeTemplate({ Component, ...props }) {
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
