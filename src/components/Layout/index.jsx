import { useState } from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  const [isNavClosed, setIsNavClosed] = useState(true);

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
      <Navbar closeNav={closeNav} isNavClosed={isNavClosed} />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Layout;
