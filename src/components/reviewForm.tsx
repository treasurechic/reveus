"use client";

import { Field, Form, Formik, FormikValues } from "formik";
import * as yup from "yup";
import Button from "./forms/button";
import { useRouter } from "next/navigation";

const scales = [
  { id: 1, emoji: "😖", text: "Worst" },
  { id: 2, emoji: "😕", text: "Not Good" },
  { id: 3, emoji: "😐", text: "Fine" },
  { id: 4, emoji: "😀", text: "Look Good" },
  { id: 5, emoji: "😍", text: "Very Good" },
];

export const ReviewForm = () => {
  const router = useRouter();

  const initialValues = {
    qualityScale: 0,
    qualityComment: "",
    securityScale: 0,
    securityComment: "",
    additionalComment: "",
  };

  const validationSchema = yup.object().shape({
    qualityScale: yup.number().positive("Invalid").label("qualityScale").required(),
    qualityComment: yup.string().label("qualityComment").required(),
    securityScale: yup.number().positive("Invalid").label("securityScale").required(),
    securityComment: yup.string().label("securityComment").required(),
    additionalComment: yup.string().label("additionalComment").optional(),
  });

  const submitForm = async (formValues: FormikValues) => {
    console.log(formValues);
    router.push(`/success?view=${encodeURIComponent('submit-review')}`);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
      validateOnBlur={false}
    >
      {({ handleSubmit, isValid, values, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit} className="container mx-auto">
            <div>
              <p className="font-bold text-pink-400 text-3xl mb-16">Task 1</p>

              <div className="mb-14">
                <label className="text-xl font-semi-bold mb-7 block">
                  Assess the product quality in scaling
                </label>
                <div className="flex gap-9 mb-6">
                  {scales.map(({ id, text, emoji }) => (
                    <div
                      className={`emoji-scale ${
                        id === values.qualityScale && "active"
                      }`}
                      key={id}
                      onClick={() => setFieldValue("qualityScale", id)}
                    >
                      <span className="emoji">{emoji}</span> <br />
                      <span className="text">{text}</span>
                    </div>
                  ))}
                </div>

                <Field
                  type="range"
                  step={1}
                  name="qualityScale"
                  id="qualityScale"
                  min={0}
                  max={5}
                  className="min-w-[26rem] mb-10"
                />
                <Field
                  name="qualityComment"
                  id="qualityComment"
                  className="form-control"
                  as="textarea"
                  rows={4}
                  placeholder="Tell us more"
                />
              </div>

              <div className="mb-14">
                <label className="text-xl font-semi-bold mb-7 block">
                  Assess the code security in scaling
                </label>
                <div className="flex gap-9 mb-6">
                  {scales.map(({ id, text, emoji }) => (
                    <div
                      className={`emoji-scale ${
                        id === values.securityScale && "active"
                      }`}
                      key={id}
                      onClick={() => setFieldValue("securityScale", id)}
                    >
                      <span className="emoji">{emoji}</span> <br />
                      <span className="text">{text}</span>
                    </div>
                  ))}
                </div>

                <Field
                  type="range"
                  step={1}
                  name="securityScale"
                  id="securityScale"
                  min={0}
                  max={5}
                  className="min-w-[26rem] mb-10"
                />
                <Field
                  name="securityComment"
                  id="securityComment"
                  className="form-control"
                  as="textarea"
                  rows={4}
                  placeholder="Tell us more"
                />
              </div>

              <label className="text-2xl text-pink-400 font-bold mb-5 block">
                Additional Comments
              </label>
              <div>
                <Field
                  name="additionalComment"
                  id="additionalComment"
                  className="form-control"
                  as="textarea"
                  rows={4}
                  placeholder="Tell us more"
                />
              </div>
            </div>
            <Button
              className="btn btn-md btn-white w-[35rem] mx-auto text-xl my-9"
              type="submit"
              disabled={!isValid}
              title="Submit"
              loadingTitle="Submitting.."
            />
          </Form>
        );
      }}
    </Formik>
  );
};
