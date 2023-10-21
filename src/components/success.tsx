import { useSearchParams } from "next/navigation";

export const Success = () => {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('view')

  return (
    <div className="text-center text-3xl font-bold leading-[3.9rem]">
      <h1 className="mb-10">Congratulations!</h1>
      <h1>
        {search === "submit-review"
          ? "Your feedback has been submitted!"
          : search === "get-review"
          ? "Your project has been successfully listed!"
          : null}
      </h1>
    </div>
  );
};
