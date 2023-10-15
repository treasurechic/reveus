import { Field, Form, Formik, FormikValues } from "formik";
import * as yup from "yup";
import CustomCheckbox from "../forms/checkbox";
import Button from "../forms/Button";
import { OnboardingPhases, User } from "@/lib/interfaces";

const allTypes = [
  {
    id: "smartContractAuditing",
    name: "Smart Contract Auditing",
  },
  {
    id: "defiProtocolAnalysis",
    name: "Defi Protocol Analysis",
  },
  {
    id: "nftTechnologyAssessment",
    name: "NFT Technology Assessment",
  },
  {
    id: "ux/uiDevelopment",
    name: "UX/UI Development",
  },
  {
    id: "gameDevelopment",
    name: "Game Development",
  },
];

export const FieldOfExpertise = ({
  updateStep,
  user,
}: {
  updateStep: (value: OnboardingPhases) => void;
  user: User;
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
      if (user.type === "gr") {
        updateStep("about");
      } else {
        //       updateStep('verification')
      }
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
      {({ handleSubmit, values, isValid }) => {
        return (
          <Form onSubmit={handleSubmit} className="lg:w-2/3 mx-auto">
            <h3 className="title text-center mb-16">
              {user.type === "gr"
                ? "What do you want to get reviewed?"
                : "Whats your field of expertise?"}
            </h3>
            <div className="w-[35rem] max-w-full mx-auto">
              {allTypes.map((v) => (
                <Label
                  id={v.id}
                  name={v.name}
                  key={v.id}
                  selected={values.productTypes.includes(v.id)}
                />
              ))}

              <Button
                className="btn btn-md btn-white w-full text-xl"
                type="submit"
                disabled={!isValid}
                title="Submit"
                loadingTitle="Submitting.."
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const Label = ({
  name,
  id,
  selected,
}: {
  name: string;
  id: string;
  selected: boolean;
}) => {
  return (
    <label
      className={`px-[2.2rem] py-[0.9rem] w-full leading-[0] rounded block mb-8 text-xl text-white cursor-pointer ${
        selected ? "bg-pink-400" : "bg-black-300"
      }`}
    >
      <Field
        type="checkbox"
        name="productTypes"
        component={CustomCheckbox}
        id={id}
        value={id}
        className="mr-4"
        label={name}
      />
    </label>
  );
};
