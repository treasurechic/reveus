import { useState } from "react";
import { OnboardingPhases, User, UserTypes } from "@/lib/interfaces";
import React from "react";
import { ConnectWalletModal } from "../connectWallet";

export const TodoOptions = ({
  updateStep,
  setUser,
}: {
  updateStep: (value: OnboardingPhases) => void;
  setUser: (value: User) => void;
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [type, setType] = useState<UserTypes>();

  const connectWallet = (_type: UserTypes) => {
    setType(_type);
    setOpenModal(true);
  };

  const nextStep = () => {
    if (type === "hr") {
      updateStep("FOE");
      setUser({ type: "hr" });
    } else {
      updateStep("about");
      setUser({ type: "gr" });
    }
  };

  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <h3 className="title text-center mb-16">What do you wanna do?</h3>
      <div>
        <button
          className="btn btn-md btn-secondary w-[25rem] mx-auto mb-8 text-xl"
          onClick={() => connectWallet("hr")}
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
          onClick={() => connectWallet("gr")}
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

      <ConnectWalletModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        nextStep={nextStep}
      />
    </div>
  );
};
