import Layout from "../../components/Layout";
import "./Contact.css";

function Contact(props) {
  return (
    <Layout>
      <div className="contact">
        <h1 className="contact-title">Contact me</h1>
        <p className="contact-para">
          I am seeking out opportunities to grow and contribute to an exciting
          and forward-thinking organization. I want to bring my collective
          learning experiences to the table and collaborate to develop solutions
          to real problems in a way that optimizes our knowledge.
        </p>
        <div className="butn">
          <button className="contact-btn">
            <a href="mailto:sarahjoseph@ymail.com" className="mail-link">
              Get in touch
            </a>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
