import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Navbar from "./components/Navbar/Navbar";
//import Layout from './components/Layout';

//import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App(props, state) {
  // const [wid, setWid] = useState("0%");
  // const [shrink, setShrink] = useState("100%");
  // const [left, setLeft] = useState("10rem");
  // const [right, setRight] = useState('40rem');

  // const openSidenav = () => {
  //   setWid("25%");
  //   setShrink("55%");
  //   setLeft("30rem");
  //   // setRight('0rem');
  // };

  // const closeSidenav = () => {
  //   setWid("0%");
  //   setShrink("100%");
  //   setLeft("10rem");
  //   // setRight('40rem');
  // };

  return (
    <Router>
      {/* <div className="openNav">
        <button onClick={openSidenav} className="open-btn">
          =
        </button>
      </div> */}
      {/* <Navbar width={wid} closeNav={closeSidenav} /> */}
      <Switch>
        <Route path="/Home">
          {/* <Home width={shrink} left={left} /> */}
          <Home />
        </Route>

        <Route path="/About">
          {/* <About width={shrink} left={left} /> */}
          <About />
        </Route>

        <Route path="/Projects">
          {/* <Projects width={shrink} left={left} /> */}
          <Projects />
        </Route>

        <Route path="/Contact">
          {/* <Contact width={shrink} left={left} /> */}
          <Contact />
        </Route>

        <Route path="/">
          {/* <Home width={shrink} left={left} /> */}
          <Home />
        </Route>
      </Switch>
    </Router>
    //<Layout />
  );
}

export default App;
