import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SampleGallery } from "@/components/landing/SampleGallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SampleGallery />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
