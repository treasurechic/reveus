import { MainLayout } from "@/components/mainLayout";
import { Onboarding } from "@/components/onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Onboarding",
};

const OnboardPage = () => {

  return (
    <MainLayout>
      <Onboarding />
    </MainLayout>
  );
};

export default OnboardPage;
