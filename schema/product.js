import * as Yup from "yup";

export const productSchema = Yup.object({
  image: Yup.mixed().required("Image Required"),
  title: Yup.string().required("Title is required"),
  desc: Yup.string().required("Description is required"),
  smallPrice: Yup.number().required("Small price is required"),
  mediumPrice: Yup.number().required("Medium price is required"),
  largePrice: Yup.number().required("Large price is required"),
});
