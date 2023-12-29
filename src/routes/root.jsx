import { useState, useEffect } from "react";
import Header from "../shared-components/header";
import Footer from "../shared-components/footer";
import SideBar from "../shared-components/side-bar";
import { Outlet } from "react-router-dom";


export default function Root() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth));
    };
  },[]);

  return (
    <>
      {screenWidth > 768 ? <Header /> : <SideBar /> }
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}