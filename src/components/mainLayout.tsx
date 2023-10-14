import { ReactNode } from "react";
import { DefaultNavbar } from "./navbar";
import { DefaultFooter } from "./footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col px-24">
      <DefaultNavbar />
      <div className="my-10">{children}</div>
      <DefaultFooter />
    </main>
  );
};
