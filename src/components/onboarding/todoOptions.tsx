import { OnboardingPhases, User } from "@/lib/interfaces";
import React from "react";

export const TodoOptions = ({
  updateStep,
  setUser,
}: {
  updateStep: (value: OnboardingPhases) => void;
  setUser: (value: User) => void;
}) => {
  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <h3 className="title text-center mb-16">What do you wanna do?</h3>
      <div>
        <button
          className="btn btn-md btn-secondary w-[25rem] mx-auto mb-8 text-xl"
          onClick={() => {
            updateStep("FOE");
            setUser({ type: "hr" });
          }}
        >
          <span className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Help Reviewing
        </button>
        <button
          className="btn btn-md btn-secondary w-[25rem] mx-auto mb-8 text-xl"
          onClick={() => {
            updateStep("about");
            setUser({ type: "gr" });
          }}
        >
          <span className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="22"
              viewBox="0 0 26 22"
              fill="none"
            >
              <path
                d="M23.5 5.25L14 14.75L9 9.75L1.5 17.25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 5.25H23.5V11.25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Get Reviewed
        </button>
      </div>
    </div>
  );
};
