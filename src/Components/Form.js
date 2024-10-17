import React from "react";
import "./Form.css";

function Form({ values, errors, change, submit }) {
  return (
    <div className="contact-box">
      <h2>Contact Me</h2>
      <form onSubmit={submit}>
        <div className="user-box">
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={change}
            required
          />
          <label>Username</label>
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={change}
            required
          />
          <label>Password</label>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={change}
            required
          />
          <label>Email</label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="user-box">
          <textarea
            name="message"
            value={values.message || ""}
            onChange={change}
            required
          />
          <label>Message</label>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="checkbox-box">
          <input
            type="checkbox"
            id="tos"
            name="tos"
            checked={values.tos}
            onChange={change}
          />
          <label htmlFor="tos">I agree to the Terms of Service</label>
          {errors.tos && <p className="error">{errors.tos}</p>}
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
