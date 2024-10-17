import React from "react";
import "./Form.css";

const Form = (props) => {
  const { values, change } = props;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className="contact-box">
      <h2>Contact Me</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
          <label>Full Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>
        <div className="tos-box">
          <input
            type="checkbox"
            name="tos"
            checked={values.tos}
            onChange={handleChange}
          />
          <label>Agree to Terms of Service</label>
        </div>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Send
        </a>
      </form>
    </div>
  );
};

export default Form;


















// original code: 
// import React from "react";

// const Form = (props) => {
//   const { change, submit } = props;
//   const { username, password, tos } = props.values;

//   const onChange = (e) => {
//     const { name, value, checked, type } = e.target;
//     const newVal = type === "checkbox" ? checked : value;
//     change({ name, newVal });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     submit();
//   };

//   return (
//     <div>
//       <h1>My Cool Form!</h1>
//       <form onSubmit={onSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={onChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={onChange}
//           />
//         </label>
//         <br />
//         <label>
//           Terms of Service:
//           <input type="checkbox" name="tos" checked={tos} onChange={onChange} />
//         </label>
//         <br />
//         <input type="submit" value="Create a Friend!" />
//       </form>
//     </div>
//   );
// };

// export default Form;
