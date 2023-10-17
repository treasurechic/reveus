import React from "react";
import { DefaultNavbar } from "./navbar";
import { Icons } from "./icons";

export const Hero = () => {
  return (
    <div className="hero">
      <DefaultNavbar className="bg-transparent" />
      <div className="hero-content">
        <h1 className="font-bold text-4xl leading-none">Discover. Review. Earn</h1>
        <p className="text-xl font-medium">Your Web3 Journey Starts Here</p>
        <div className="flex gap-10">
          <button className="btn btn-primary btn-md">Launch App <Icons icon="uil:arrow-right" className="text-xxl"/></button>
          <button className="btn btn-outline-primary btn-md">Learn More</button>
        </div>
      </div>
    </div>
  );
};
