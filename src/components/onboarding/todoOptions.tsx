import React from "react";
import { Icons } from "../icons";

export const TodoOptions = () => {
  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <h3 className="text-title text-center mb-16">What do you wanna do?</h3>
      <div>
        <button className="btn btn-md btn-secondary w-[25rem] mx-auto mb-8 text-xl">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Help Reviewing
        </button>
        <button className="btn btn-md btn-secondary w-[25rem] mx-auto mb-8 text-xl">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 5.25H23.5V11.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Get Reviewed
        </button>
      </div>
    </div>
  );
};
