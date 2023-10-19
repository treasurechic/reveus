import { MainLayout } from "@/components/mainLayout";
import { ProductOverview } from "@/components/product/overview";
import { ProductReviews } from "@/components/product/reviews";

const ProductPage = () => {
  return (
    <MainLayout>
      <div className="my-10">
        <ProductOverview />
        <ProductReviews />
      </div>
    </MainLayout>
  );
};

export default ProductPage;
