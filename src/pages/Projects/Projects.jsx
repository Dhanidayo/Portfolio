import Slides from "../../components/Carousel/Slides";
import Layout from "../../components/Layout";
import "./Projects.css";


function Projects(props) {
  return (
    <Layout>
      <div className="project">
        <h1 className="project-title">My Projects</h1>
        <div className="works">
          <p>
            A selection of some recent projects I have worked on: landing pages,
            websites, backend etc.
          </p>
          <Slides />
        </div>
        <div className="copytext">
          <p>&copy;dhanidayo 2021</p>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
