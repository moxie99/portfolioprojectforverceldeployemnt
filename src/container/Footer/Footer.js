import * as React from "react";
import "./Footer.scss";
import { images } from "../../constants/";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Footer = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Wanna reach out to me?</h2>

      <div className="app__footer-cards">
        <div className="app__footer-cardItem">
          <img src={images.email} alt="email" />
          <a href="mailto:adeolusegun99@gmail.com" className="p-text">
            Email
          </a>
        </div>
        <div className="app__footer-cardItem">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +2347061938349" className="p-text">
            Mobile Number
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Enter Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div className="app__footer-form-feedback">
          <h3 className="head-text">
            Your Request has been submitted ... Thank you for reaching out ... I
            will get back to you shortly.
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Footer",
  "app__whitebg"
);