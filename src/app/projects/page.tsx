import { AvailableProjects } from "@/components/availableProjects";
import { MainLayout } from "@/components/mainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Projects",
};

const Projects = () => {
  return (
    <MainLayout>
      <div className="my-10 container px-4">
        <h3 className="title text-center mb-16">Projects available to you!</h3>
        <AvailableProjects />
      </div>
    </MainLayout>
  );
};

export default Projects;
