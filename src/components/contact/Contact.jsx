import React from "react";

import { StyledContactSection } from "./Contact.styled";
const Contact = () => {
  const email = "f4vazquez@gmail.com";
  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading overline">Contact</h2>
      <h2 className="title">Reach Out!</h2>
      <p>
        I am always looking out for new opportunities, so my inbox is open.
        Whether you have a question or just stopping by to say hi, Ill do my
        best to get back to you!
      </p>
      <a className="email-link" href={`mailto:${email}`}>
        {" "}
        Say Hi
      </a>
    </StyledContactSection>
  );
};

export default Contact;
