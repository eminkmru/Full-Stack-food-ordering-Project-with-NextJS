import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be 6 characters at least.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
      "Password must contaın at east one uppercase, one Iowercase, one number and one special character. "
    ),
  confirmPassword: Yup.string()
    .required("Please re-enter your password.")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});
