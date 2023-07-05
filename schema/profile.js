import * as Yup from "yup";

export const profileScheme = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name is must be at least 3 characters"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters.")
    .required("Phone number is required"),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  address: Yup.string().required("Address is required."),
  job: Yup.string(),
  bio: Yup.string().required("Bio is required."),
});
