"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headTextRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!headTextRef.current) return;

    const targets = headTextRef.current.querySelectorAll("[data-animate-head]");
    targets.forEach((el) => {
      if (el.parentElement) {
        el.parentElement.style.overflow = "hidden";
      }
    });

    gsap.set(targets, { y: 80, opacity: 0, clipPath: "inset(40% 0 0 0)" });

    gsap.to(targets, {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  //   useEffect(() => {
  //     if (!bgRef.current) return;
  //     gsap.to(bgRef.current, {
  //       yPercent: -15,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: bgRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //     });
  //   }, []);

  return (
    <section className="relative w-full h-screen flex items-end bg-background px-6 py-4">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0">
        <Image
          fill
          src="https://htarchitecte.com/wp-content/uploads/2023/06/hor-thumb-max1500x1600-HBPEXT-004-1024x683.webp"
          alt="Luxury ambience"
          className="object-cover object-center z-0"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
      </div>

      <div
        className="relative w-full mx-auto flex flex-col md:flex-row items-end justify-between z-10"
        ref={headTextRef}
      >
        
        <div
          className={`
            md:w-2/3 mb-0 md:mb-0
            absolute left-0 bottom-0 max-w-xs w-auto items-start text-left
            md:relative md:right-0 md:bottom-0 md:max-w-none md:w-2/3 md:items-start md:text-left
            flex flex-col
          `}
        >
          <div className="overflow-hidden">
            <h1
              className="font-serif uppercase text-[2.5rem] md:text-7xl font-semibold leading-none text-accent drop-shadow-md"
              data-animate-head
            >
              Where Your Investments Multiply
            </h1>
          </div>
          <div className="overflow-hidden mt-5">
            <p
              className="text-lg md:text-2xl font-medium tracking-wide text-white"
              data-animate-head
            >
              Premium plots for a premium life
            </p>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="hidden md:flex flex-col items-end justify-end md:w-1/3 pr-2 pb-4 z-20">
          <Image
            src="https://files.peachworlds.com/website/b8a2b3f0-3a39-47d6-97b7-208e50f93b71/cuqbinckyr-1-.gif"
            alt="Scroll animation"
            width={36}
            height={96}
            className="w-6 h-24 mb-1"
            unoptimized
          />
          <span className="capitalize text-white text-xs md:text-sm font-medium animate-bounce">
            scroll down
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;