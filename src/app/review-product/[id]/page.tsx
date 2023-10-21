import { MainLayout } from "@/components/mainLayout";
import { ReviewForm } from "@/components/reviewForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Review",
};

const ReviewProductPage = () => {
  return (
    <MainLayout>
      <div className="my-10 container px-4">
        <h3 className="title text-center mb-16">Give Your Review</h3>
        <ReviewForm />
      </div>
    </MainLayout>
  );
};

export default ReviewProductPage;
