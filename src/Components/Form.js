import React from "react";
import "./Form.css"; // Make sure this file exists

function Form({ values, errors, change, submit }) {
  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={change}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      {/* Repeat similar structures for password and email */}
      <div>
        <label htmlFor="tos">
          <input
            type="checkbox"
            id="tos"
            name="tos"
            checked={values.tos}
            onChange={change}
          />
          I agree to the Terms of Service
        </label>
        {errors.tos && <p className="error">{errors.tos}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
