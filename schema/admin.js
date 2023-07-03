import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string()
    .required("Username is required.")
    .min(3, "Username is minimum 3 characters."),
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be 6 characters at least.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
      "Password must contaın at east one uppercase, one Iowercase, one number and one special character. "
    ),
});
