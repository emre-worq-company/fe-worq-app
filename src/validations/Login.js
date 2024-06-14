import * as yup from "yup";

const EMAIL_REGX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

export const LoginSchema = yup.object({
  email: yup
    .string()
    .required("Bu alan zorunludur!")
    .matches(EMAIL_REGX, "Geçersiz email adresi"),
  password: yup.string().required("Bu alan zorunludur!"),
});

export default LoginSchema;
