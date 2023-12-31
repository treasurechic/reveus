import { MainLayout } from "@/components/mainLayout";
import { Onboarding } from "@/components/onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Onboarding",
};

const OnboardPage = () => {
  return (
    <MainLayout>
      <div className="my-10 container px-4">
        <Onboarding />
      </div>
    </MainLayout>
  );
};

export default OnboardPage;
