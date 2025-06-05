import * as Yup from 'yup';

export const schemaLogin = Yup.object({
  username: Yup.string().max(888).required("Username is required"),
  password: Yup.string().max(888).required("Password is required"),
})