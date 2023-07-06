import * as Yup from "yup";

export const adminFooterSchema = Yup.object({
  location: Yup.string().url("Please enter a valid URL."),
  email: Yup.string().email("Please enter a valid email address."),
  phoneNumber: Yup.string(),
  description: Yup.string(),
  day: Yup.string(),
  time: Yup.string(),
  link: Yup.string().url("Please enter a valid URL."),
  icon: Yup.string(),
});
