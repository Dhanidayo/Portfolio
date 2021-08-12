import "./Home.css";
import Layout from "../../components/Layout";

function Home(props) {
  return (
    <Layout>
      <div className="intro">
        <p className="para1">Hi, I'm</p>
        <hr />
        <p>
          <b>Sarah</b>
        </p>
      </div>
      <h1 className="role" style={{ marginRight: props.right }}>
        WEB-DEVELOPER FRONTEND BACKEND
      </h1>
    </Layout>
  );
}

export default Home;
