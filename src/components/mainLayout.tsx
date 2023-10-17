import { ReactNode } from "react";
import { DefaultNavbar } from "./navbar";
import { DefaultFooter } from "./footer";

export const MainLayout = ({
  children,
  showNav = true,
}: {
  children: ReactNode;
  showNav?: boolean;
}) => {
  return (
    <>
      {showNav && <DefaultNavbar />}
      <main className="flex min-h-screen flex-col">
        <div>{children}</div>
        <DefaultFooter />
      </main>
    </>
  );
};
