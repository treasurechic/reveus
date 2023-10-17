import React from "react";
import { Icons } from "./icons";
import Image from "next/image";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="text-center mb-8">
      <p className="title mb-12">How it works</p>
     <div className="py-20 steps-wrapper">
     <div className="container grid gap-x-8 gap-y-20 lg:grid-cols-3 sm:grid-cols-2">
        <Step
          number="1"
          title="Discover"
          desc="Browse and choose from a variety of web3 projects."
          img="/step-1.svg"
        />
        <Step
          number="2"
          title="Review"
          desc="Share your Insights and experience with the community."
          img="/step-2.svg"
        />
        <Step
          number="3"
          title="Earn"
          desc="Get rewarded with tokens, insights, and more for your valuable contributions."
          img="/step-3.svg"
        />
      </div>
     </div>
    </section>
  );
};

export const Step = ({
  number,
  title,
  desc,
  img,
}: {
  number: string;
  title: string;
  desc: string;
  img: string;
}) => {
  return (
    <div className="text-center w-[70%] mx-auto">
      <div className="mb-8 rounded-full bg-blue-300 justify-center items-center flex mx-auto w-[3.5rem] h-[3.5rem]">{number}</div>
      <p className="mb-5 text-xl font-bold">{title}</p>
      <p className="text-lg text-gray-300 mb-4">{desc}</p>
      <p className="flex gap-3 text-pink-400 mt-auto cursor-pointer mb-9 justify-center">
        LEARN MORE
        <Icons icon="mingcute:arrow-right-fill" className="text-xxl icon" />
      </p>
      <Image src={img} width={100} height={110} alt={title} className="mx-auto"/>
    </div>
  );
};
