import { Progress } from "flowbite-react";

export const DefaultProgress = ({ value }: { value: number }) => {
  return <Progress progress={value} className="progress-bar"/>;
};
