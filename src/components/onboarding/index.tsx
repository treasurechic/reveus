"use client";

import { useState } from "react";
import { FieldOfExpertise } from "./fieldOfExpertise";
import { AboutProject } from "./aboutProject";
import { TodoOptions } from "./todoOptions";

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <TodoOptions />
      ) : step === 2 ? (
        <FieldOfExpertise />
      ) : step === 3 ? (
        <AboutProject />
      ) : (
        <FieldOfExpertise />
      )}
    </div>
  );
};
