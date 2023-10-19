import { MainLayout } from "@/components/mainLayout";
import { ProductCard } from "@/components/product/productCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Marketplace",
};

const Marketplace = () => {
  return (
    <MainLayout>
      <div className="my-10 container px-4">
        <h3 className="title text-center mb-16">Marketplace</h3>
        <div className="grid gap-x-8 gap-y-20 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {[...Array(20)].map((_, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Marketplace;
