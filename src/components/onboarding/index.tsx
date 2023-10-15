"use client";

import { useState } from "react";
import { FieldOfExpertise } from "./fieldOfExpertise";
import { AboutProject } from "./aboutProject";
import { TodoOptions } from "./todoOptions";
import { OnboardingPhases, User } from "@/lib/interfaces";

export const Onboarding = () => {
  const [step, setStep] = useState<OnboardingPhases>("options");
  const [user, setUser] = useState<User>();

  const updateStep = (value: OnboardingPhases) => {
    setStep(value);
  };

  return (
    <div>
      {step === "options" ? (
        <TodoOptions updateStep={updateStep} setUser={setUser} />
      ) : step === "FOE" && user ? (
        <FieldOfExpertise updateStep={updateStep} user={user} />
      ) : step === "about" ? (
        <AboutProject updateStep={updateStep} />
      ) : null}
    </div>
  );
};
