import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-light p-lg-5 p-3 m-2 shadow">
      <h2 className="text-primary pb-4">Send your queries!</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="fullName"
        />
        <label for="fullName" className="form-label">
          Full Name
        </label>
      </div>
      <div className="mb-3 form-floating">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="email"
        />
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
  );
};

export default ContactForm;
