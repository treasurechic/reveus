import React from "react";
import { DefaultNavbar } from "./navbar";
import { Icons } from "./icons";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="hero">
      <DefaultNavbar className="bg-transparent" />
      <div className="hero-content">
        <h1 className="font-bold text-4xl leading-none">
          Discover. Review. Earn
        </h1>
        <p className="text-xl font-medium">Your Web3 Journey Starts Here</p>
        <div className="flex gap-10">
          <Link href={"/products"}>
            <button className="btn btn-primary btn-md">
              Launch App <Icons icon="uil:arrow-right" className="text-xxl" />
            </button>
          </Link>
          <Link href={"/#about"}>
            <button className="btn btn-outline-primary btn-md">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
