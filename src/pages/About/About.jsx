import "./About.css";
//import images
import html from "../../Resources/logos/html.png";
import css from "../../Resources/logos/css.png";
import js from "../../Resources/logos/js.png";
import react from "../../Resources/logos/logo.svg";
import cSharp from "../../Resources/logos/c-sharp.jpeg";
import nodejs from "../../Resources/logos/nodejs-logo-FBE122E377-seeklogo.com.png";
import Layout from "../../components/Layout";

function About(props) {
  return (
    <Layout>
      <h1 className="title">About me</h1>
      <p className="about">
        I am a software developer based in Lagos, Nigeria.<br></br>I am
        passionate about creating rich, functional and accessible digital
        experiences.
      </p>
      <div className="skills">
        <p>My skills include:</p>
        <img src={html} alt="html" className="logo" />
        <img src={css} alt="css" className="logo" />
        <img src={js} alt="js" className="logo" />
        <img src={react} alt="react" className="logo" />
        <img src={nodejs} alt="nodejs" className="logo" />
        <img src={cSharp} alt="c-sharp" className="logo dotnet" />
      </div>
      <div className="range-container">
        <label htmlFor="HTML">HTML</label>
        <input
          type="range"
          name="HTML"
          id="html-range"
          min="5"
          max="100"
          value="70"
          className="myRange"
        />
        <label htmlFor="CSS">CSS</label>
        <input
          type="range"
          name="CSS"
          id="html-range"
          min="5"
          max="100"
          value="60"
          className="myRange"
        />
        <label htmlFor="JavaScript">JavaScript</label>
        <input
          type="range"
          name="JavaScript"
          id="html-range"
          min="5"
          max="100"
          value="55"
          className="myRange"
        />
        <label htmlFor="react">React</label>
        <input
          type="range"
          name="React"
          id="html-range"
          min="5"
          max="100"
          value="50"
          className="myRange"
        />
        <label htmlFor="c-sharp">.NET/C#</label>
        <input
          type="range"
          name="C#"
          id="html-range"
          min="5"
          max="100"
          value="40"
          className="myRange"
        />
      </div>
    </Layout>
  );
}

export default About;
