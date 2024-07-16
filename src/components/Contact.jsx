import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div id="contact-div">
      <button>
        <Link to="/"> ← </Link>
      </button>
      <div id="contact-form">
        <form>
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" />

          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" />

          <label>Email</label>
          <input type="text" id="email" name="email" />

          <label>Subject</label>
          <input type="text" id="subject" name="subject" />

          <textarea></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
