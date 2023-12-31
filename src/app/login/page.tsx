import { LoginForm } from "@/components/loginForms";
import { MainLayout } from "@/components/mainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Login",
};

const Login = () => {
  return (
    <MainLayout>
     <div className="my-10 container px-4">
     <LoginForm />
     </div>
    </MainLayout>
  );
};

export default Login;
