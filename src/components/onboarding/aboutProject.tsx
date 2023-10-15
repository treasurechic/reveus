import { Field, Form, Formik, FormikValues } from "formik";
import * as yup from "yup";
import Button from "../forms/button";
import { OnboardingPhases } from "@/lib/interfaces";
import Image from "next/image";
import CustomCheckbox from "../forms/checkbox";

export const AboutProject = ({
  updateStep,
}: {
  updateStep: (value: OnboardingPhases) => void;
}) => {
  const initialValues: {
    logo: File | string;
    description: string;
    rewardToOffer: string;
    agreement: boolean;
  } = {
    logo: "",
    description: "",
    rewardToOffer: "",
    agreement: false,
  };

  const validationSchema = yup.object().shape({
    logo: yup.mixed().label("Logo").required(),
    description: yup.string().label("Description").required(),
    rewardToOffer: yup.string().label("Reward To Offer").required(),
    agreement: yup
      .boolean()
      .oneOf([true], "You must agree to the conditions to proceed.")
      .required("You must agree to the conditions to proceed."),
  });

  const submitForm = async (formValues: FormikValues) => {
    console.log(formValues);
    updateStep("FOE");
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
      validateOnBlur={false}
    >
      {({ handleSubmit, isValid, setFieldValue, values }) => {
        return (
          <Form onSubmit={handleSubmit} className="container mx-auto">
            <h3 className="title text-center mb-20 lg:w-2/3 mx-auto">
              Tell us about your project!
            </h3>
            <div className="grid md:grid-cols-2 gap-20 mb-16 items-center">
              <div className="md:w-full w-1/2">
                <Image
                  src="/about1.png"
                  width="500"
                  height="410"
                  alt="about"
                  className="w-full"
                />
              </div>
              <div>
                {values.logo && (
                  <p className="text-xl font-bold mb-9">
                    Uploaded File: {(values.logo as File).name}
                  </p>
                )}
                <label
                  htmlFor="logo"
                  className="btn btn-primary btn-lg mb-10 w-[23rem]"
                >
                  Upload logo
                  <input
                    type="file"
                    name="logo"
                    id="logo"
                    accept="image/png,image/jpeg,image/jpg"
                    className="hidden"
                    onChange={({ target }: any) => {
                      if (target) {
                        if (target.files) {
                          setFieldValue("logo", target.files[0]);
                        }
                        (target as any).value = null;
                      }
                    }}
                  />
                </label>
                <p className="text-xl font-bold">Use JPEG or PNG Format</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-20 mb-16 items-center">
              <div>
                <label className="text-2xl text-pink-400 font-bold mb-10 block">
                  About You
                </label>
                <div>
                  <Field
                    name="description"
                    id="description"
                    className="form-control"
                    as="textarea"
                    rows={8}
                    placeholder="Tell us about your project!"
                  />
                </div>
              </div>
              <div className="md:w-full w-1/2">
                <Image
                  src="/about2.png"
                  width="500"
                  height="410"
                  alt="about"
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-20 mb-16 items-center">
              <div className="md:w-full w-1/2">
                <Image
                  src="/about3.png"
                  width="500"
                  height="410"
                  alt="about"
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-2xl text-pink-400 font-bold mb-10 block">
                  What Reward Are You Offering
                </label>
                <p className="text-xl mb-10">
                  Give rewards for completing tasks and helping your project to
                  improve
                </p>
                <div>
                  <Field
                    name="rewardToOffer"
                    id="rewardToOffer"
                    className="form-control"
                    as="textarea"
                    rows={8}
                    placeholder="Eg. 20 tokens per bug found."
                  />
                </div>
              </div>
            </div>
            <div className="mb-20">
              <Field
                type="checkbox"
                name="agreement"
                component={CustomCheckbox}
                id={"agreement"}
                label={
                  "By filling this form, I agree to be reviewed by Reveus Team and Independent Reviewers"
                }
              />
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
