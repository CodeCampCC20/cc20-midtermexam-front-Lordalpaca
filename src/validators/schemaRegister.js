import * as Yup from 'yup';

export const schemaRegister = Yup.object({
  email: Yup.string().max(888).email().required("Email is required"),
  username: Yup.string().max(888).required("Username is required"),
  password: Yup.string().max(888).required("Password is required"),
  confirmPassword: Yup.string().max(888).oneOf([Yup.ref("password")], "Confirm password must match password").required("Confirm password must match password"),
})