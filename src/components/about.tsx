import React from "react";
import { Icons } from "./icons";

export const About = () => {
  return (
    <section id="about" className="lg:py-48 py-24 font-medium container">
      <div>
        <p className="title text-pink-400 mb-5">Who we are</p>
        <p className="text-xl mb-10">
          Reveus is a review-to-earn platform and a thriving community of
          specialized web3 reviewers.
        </p>

        <p className="text-xxl mb-32">
          We connect you with cutting-edge projects, tokens, DAOs, and trading
          platforms. Our mission is to empower you with knowledge and rewards
          while boosting the web3 ecosystem’s quality and reliability.
        </p>
      </div>

      <div>
        <p className="title text-center mb-10">
          Discover the Reveus Difference
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card
            initials="QA"
            title="Quality Assurance"
            description="Rigorous vetting ensures only the most promising Web3 projects
                gain access to our community of expert reviewers."
          />
          <Card
            initials="TRI"
            title="Transparent & Reliable Information"
            description="We provide trustworthy project details to help you make informed decisions in the ever-evolving Web3 ecosystem."
          />
          <Card
            initials="CDR"
            title="Driven Reveiws"
            description="Collaboration and expertise- Sharing Within the Web3 Community Foister innovation and growth."
          />
          <Card
            initials="QA"
            title="Quality Assurance"
            description="Rigorous vetting ensures only the most promising Web3 projects
                gain access to our community of expert reviewers."
          />
          <Card
            initials="QA"
            title="Quality Assurance"
            description="Rigorous vetting ensures only the most promising Web3 projects
                gain access to our community of expert reviewers."
          />
          <Card
            initials="ETA"
            title="Earn Tokens for Contributions"
            description="Contribute as a Reviewer and Earn Tokens for your Valuable Insights."
          />
        </div>
      </div>
    </section>
  );
};

export const Card = ({
  initials,
  title,
  description,
}: {
  initials: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-black-300 p-14 flex flex-col lg:min-h-[40rem]">
      <div className="mb-10">
        <div className="mb-10 bg-gray-200 flex items-center justify-center w-[6rem] h-[6rem]">
          <span className="bg-pink-400 p-3">{initials}</span>
        </div>
        <div className="text-2xl font-semibold leading-normal mb-5">{title}</div>
        <p className="text-base text-gray-300 leading-[2rem]">{description}</p>
      </div>
      <div className="flex gap-3 text-pink-400 mt-auto cursor-pointer">
        LEARN MORE
        <Icons icon="mingcute:arrow-right-fill" className="text-xxl icon" />
      </div>
    </div>
  );
};
