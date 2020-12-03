import React from "react";
import "../Contact/contact.css";
import contacts from "../Data/contactInfo.json";
import { Link } from "react-router-dom";

function fa() {}
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-elements">
        {contacts.map((contact, index) => {
          return (
            <div className="contact-with-label" key={index}>
              <a href={contact.src} target="_blank">
                {contact.label}:{contact.value}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Contact;
