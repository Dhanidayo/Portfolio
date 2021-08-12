import { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  const [wid, setWid] = useState("0%");
  const [shrink, setShrink] = useState("100%");
  const [left, setLeft] = useState("10rem");
  const [isNavClosed, setIsNavClosed] = useState(true);

  const openSidenav = () => {
    setWid("25%");
    setShrink("55%");
    setLeft("30rem");
    // setRight('0rem');
  };

  const closeSidenav = () => {
    setWid("0%");
    setShrink("100%");
    setLeft("10rem");
    // setRight('40rem');
  };

  const openNav = () => setIsNavClosed(false);

  const closeNav = () => setIsNavClosed(true);

  return (
    <div className="main-layout">
      <div className="openNav">
        <button onClick={openNav} className="open-btn">
          =
        </button>
      </div>
      <p className="nickname">techbee</p>
      <Navbar width={wid} closeNav={closeNav} isNavClosed={isNavClosed} />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Layout;
