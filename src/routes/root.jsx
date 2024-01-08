import { useState, useEffect } from "react";
import Header from "../shared-components/header";
import Footer from "../shared-components/footer";
import SideBar from "../shared-components/side_bar";
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
      {screenWidth > 1024 ? <Header /> : <SideBar /> }
      <div className="flex flex-col items-center justify-center" id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}