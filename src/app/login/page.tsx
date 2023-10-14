import { LoginForm } from "@/components/loginForms";
import { MainLayout } from "@/components/mainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Login",
};

const Login = () => {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
};

export default Login;
