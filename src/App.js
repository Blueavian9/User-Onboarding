import React, { useState } from "react";
import "./App.css";
import "./Form.css";
import schema from "./validation/formSchema";
import * as yup from "yup";
import Form from "./Components/Form";

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted with values:", formValues);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };

  return (
    <div className="App">
      <Form
        values={formValues}
        errors={formErrors}
        change={handleChange}
        submit={handleSubmit}
      />
    </div>
  );
}

export default App;