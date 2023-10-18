import { MainLayout } from "@/components/mainLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reveus - Marketplace",
};

const Marketplace = () => {
  return (
    <MainLayout>
      <div className="my-10 container px-4">
      <h3 className="title text-center mb-16">Marketplace</h3>
      <div>

      </div>
      </div>
    </MainLayout>
  );
};

export default Marketplace;
