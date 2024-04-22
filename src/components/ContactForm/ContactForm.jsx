import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const phoneRegExp = /^[0-9]{3}?-[0-9]{2}?-[0-9]{2}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(phoneRegExp, "Please follow pattern 123-45-67"),
});

const initialValues = {
  name: "",
  phoneNumber: "",
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const phoneNumberFieldId = useId();

  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.phoneNumber,
    });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css["field-container"]}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              name="name"
              type="text"
              id={nameFieldId}
              placeholder="Name..."
              className={css.field}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css["field-container"]}>
            <label className={css.label} htmlFor={phoneNumberFieldId}>
              Number
            </label>
            <Field
              name="phoneNumber"
              type="tel"
              placeholder="123-45-67"
              id={phoneNumberFieldId}
              className={css.field}
            />
            <ErrorMessage
              className={css.error}
              name="phoneNumber"
              component="span"
            />
          </div>
          <button className={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
