import { ProductCard } from "./product/productCard";

export const AvailableProjects = () => {
  return (
    <div className="grid gap-x-8 gap-y-20 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {[...Array(5)].map((_, idx) => (
        <ProductCard key={idx} marketplace={false} />
      ))}
    </div>
  );
};
