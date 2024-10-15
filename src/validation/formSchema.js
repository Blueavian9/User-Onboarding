import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  tos: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required(),
});

export default formSchema;




// original schema code
// const fromSchema = you.object().shape({
//   username: yup
//     .string()
//     .trim()
//     .required("Username is required!")
//     .min(3, "Username must be 3 characters long!"),
//   email: yup
//    .string()
//    .email("Must be a valid email address")
//    .required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(6, "Password must be 6")
//   tos: yup
//     .boolean()
//     .oneOf({true}, "Must accept the terms and conditions ya dolt!")

// })
