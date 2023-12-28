import Header from "../shared-components/header";
import Footer from "../shared-components/footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}