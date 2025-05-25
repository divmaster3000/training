import * as yup from "yup";

export const validationSchema = yup
  .object({
    email: yup.string().required("This field is required."),
    password: yup.string().required("This field is required."),
  })
  .required();

export type LoginForm = yup.InferType<typeof validationSchema>;
