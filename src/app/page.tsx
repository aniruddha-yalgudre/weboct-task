"use client";

import { AboutSection } from "@/components/about-section";
import AmenitiesSection from "@/components/amenities-section";
import FAQsSection from "@/components/faqs-section";
import Feature from "@/components/feature-section";
import Hero from "@/components/hero";
import LogoCloud from "@/components/logo-cloud";
import EnquireSection from "@/components/stats-section";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let scroll: any;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll();
      const mainEl = document.querySelector("main") as HTMLElement | null;
      if (mainEl) {
        scroll.addScrollElements(mainEl);
      }
    })();
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

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
