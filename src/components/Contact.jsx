import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "gem-portfolio";
    const templateId = "template_ct6qzi1";
    const publicKey = "eeZ_8VbzfeTHUtfhv";

    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  return (
    <div id="contact-div">
      <button className="button">
        <Link to="/"> ← </Link>
      </button>
      
        <form id="contact-form"onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <textarea
            type="type"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input id="submit-btn" type="submit" value="Send" />
        </form>
    </div>
  );
}
