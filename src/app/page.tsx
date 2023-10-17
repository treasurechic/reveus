import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { MainLayout } from "@/components/mainLayout";

export default function Home() {
  return (
    <MainLayout showNav={false}>
      <Hero />
      <About />
      <HowItWorks />
      <Faq />
    </MainLayout>
  );
}
