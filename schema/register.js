import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name is must be at least 3 characters"),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be 6 characters at least.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{6,}$/,
      "Password must contaın at east one uppercase, one Iowercase, one number and one special character. "
    ),
  confirmPassword: Yup.string()
    .required("Please re-enter your password.")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});
