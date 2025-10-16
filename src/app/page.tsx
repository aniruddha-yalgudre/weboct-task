"use client";

import { AboutSection } from "@/components/about-section";
import AmenitiesSection from "@/components/amenities-section";
import FAQsSection from "@/components/faqs-section";
import Feature from "@/components/feature-section";
import Hero from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import EnquireSection from "@/components/stats-section";

export default function Home() {
  // LocomotiveScroll integration is removed/fixed due to lint issues. Uncomment and adjust below if needed later.
  // useEffect(() => {
  //   let scroll: any;
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     scroll = new LocomotiveScroll({
  //       el: document.querySelector("main"),
  //       smooth: true,
  //     });
  //   })();
  //   return () => {
  //     if (scroll && typeof scroll.destroy === "function") scroll.destroy();
  //   };
  // }, []);

  return (
    <main className="w-full h-full">
      <Hero />
      <LogoCloud />
      <AboutSection />
      <Feature />
      <AmenitiesSection />
      <EnquireSection />
      <FAQsSection />
    </main>
  );
}
