import React from "react";
import ContactForm from "../contact/ContactForm";

const ContactSection = () => {
  return (
    <div className="container p-lg-5 p-2">
        <div className="bg-primary rounded">
            <h2 className="text-center p-2 text-light">Contact Us</h2>
        </div>
        <div className="pt-4 pb-4 text-center">
            <h4>Mail us at</h4>
            <p className="fs-5"><i className="bi bi-envelope-fill"></i> info@darpanenterprises.in</p>
            <h5 className="text-primary pt-4 pb-4">Or</h5>
        </div>

        <div className="container d-flex justify-content-center align-items-center mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9893617054668!2d77.29668757533199!3d28.54003947571552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce41d5d2f3d3b%3A0x17965f352e0fe013!2sPocket%20M%2C%20Sarita%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1742644235125!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <ContactForm />
    </div>
  );
};

export default ContactSection;
