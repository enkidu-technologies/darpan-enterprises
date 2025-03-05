import React from "react";

const ContactSection = () => {
  return (
    <div className="container p-5">
        <div className="bg-primary rounded">
            <h2 className="text-center p-2 text-light">Contact Us</h2>
        </div>
        <div className="pt-4 pb-4 text-center">
            <h4>Mail us at</h4>
            <p className="fs-5"><i className="bi bi-envelope-fill"></i> info@darpanenterprises.in</p>
            <h5 className="text-primary pt-4 pb-4">Or</h5>
        </div>

      <form className="bg-light p-5 shadow">
        <h2 className="text-primary pb-4">Send your queries!</h2>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="fullName" placeholder="fullName" />
          <label for="fullName" className="form-label">
            Full Name
          </label>
        </div>
        <div className="mb-3 form-floating">
          <input type="email" className="form-control" id="email" placeholder="email" />
          <label for="email" className="form-label">
            Email
          </label>
        </div>
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            id="textarea"
            rows="3"
            placeholder="Your Message"
          ></textarea>
          <label for="textarea" className="form-label">
            Your Message
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
