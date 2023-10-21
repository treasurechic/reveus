import { MainLayout } from "@/components/mainLayout";
import { Success } from "@/components/success";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Success",
};

const SuccessPage = () => {
  return (
    <MainLayout>
      <div className="my-10 container px-4 success-wrapper">
        <Success />
      </div>
    </MainLayout>
  );
};

export default SuccessPage;
