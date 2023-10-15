import { Field, Form, Formik, FormikValues } from "formik";
import * as yup from "yup";
import Button from "../forms/Button";
import { OnboardingPhases } from "@/lib/interfaces";

export const AboutProject = ({
  updateStep,
}: {
  updateStep: (value: OnboardingPhases) => void;
}) => {
  const initialValues: { productTypes: string[] } = {
    productTypes: [],
  };

  const validationSchema = yup.object().shape({
    productTypes: yup
      .array()
      .of(yup.string().label("Selection").required())
      .required(),
  });

  const submitForm = async (formValues: FormikValues) => {
    if (formValues.productTypes.length > 0) {
      console.log(formValues);
      updateStep("FOE");
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
      validateOnBlur={false}
    >
      {({ handleSubmit, isValid }) => {
        return (
          <Form onSubmit={handleSubmit} className="container mx-auto">
              <h3 className="title text-center mb-20 lg:w-2/3 mx-auto">
                Tell us about your project!
              </h3>
              <div className="grid grid-cols-2 gap-4 ">
<div>s</div>
<div>s</div>
              </div>

                <Button
                  className="btn btn-md btn-white w-[35rem] mx-auto text-xl my-7"
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
