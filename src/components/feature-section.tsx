"use client"

import { useMemo, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Card from "./card"

gsap.registerPlugin(ScrollTrigger)

type FeatureItem = {
  icon: string
  title: string
  desc: string
  buttonText: string
}

const Feature = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const featuresData: FeatureItem[] = useMemo(
    () => [
      {
        icon: "map-pin",
        title: "Prime Location",
        desc: "Conveniently located on the old Mumbai Pune Expressway with seamless access to urban centers like PCMC & PMC, all while being surrounded by tranquil nature.",
        buttonText: "Schedule a Site Visit",
      },
      {
        icon: "community-line",
        title: "Exclusive Community",
        desc: "Limited number of plots foster an intimate, close-knit neighborhood with like-minded residents and a premium atmosphere.",
        buttonText: "Schedule a Site Visit",
      },
      {
        icon: "hotel-luxury",
        title: "Luxury Amenities",
        desc: "Live lavishly with a clubhouse, swimming pool, meditation area, and a host of modern recreational facilities.",
        buttonText: "Schedule a Site Visit",
      },
      {
        icon: "school-line",
        title: "Top-notch Facilities",
        desc: "Benefit from proximity to premier institutions such as Pimpri Chinchwad University and Pawna Multispeciality Hospital for unmatched convenience.",
        buttonText: "Schedule a Site Visit",
      },
      {
        icon: "gallery-view-2",
        title: "Spacious Plots",
        desc: "Choose from a range of plot sizes with ample space and flexibility to craft the home of your dreams.",
        buttonText: "Schedule a Site Visit",
      },
      {
        icon: "government-line",
        title: "Quality Infrastructure",
        desc: "Enjoy well-planned infrastructure and round-the-clock security systems ensuring a safe and comfortable living experience.",
        buttonText: "Schedule a Site Visit",
      },
      {
        icon: "file-shield-2-line",
        title: "Legal Assurance",
        desc: "PMRDA approval, individual sale deeds, and RERA registration provide complete transparency and peace of mind.",
        buttonText: "Schedule a Site Visit",
      },
      {
        icon: "wallet-3-line",
        title: "Flexible Payment Options",
        desc: "Benefit from attractive pre-launch rates and flexible payment schedules for a convenient and stress-free investment.",
        buttonText: "Schedule a Site Visit",
      },
    ],
    [],
  )

  useGSAP(() => {
    if (!containerRef.current) return

    const cards = gsap.utils.toArray<HTMLElement>(".feature-card")
    if (!cards.length) return

    const total = cards.length
    const spacing = 56 // vertical offset between stacked cards (ladder rungs)

    // Ensure stacking and initial "ladder" look
    cards.forEach((card, i) => {
      gsap.set(card, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        y: i * spacing, // ladder offset downwards
        scale: 0.94, // slight initial scale
        zIndex: total - i, // upcoming cards are above older ones
        transformOrigin: "center center",
        willChange: "transform",
        force3D: true,
      })
    })

    const viewport = () => (typeof window !== "undefined" ? window.innerHeight : 800)

    // Build timeline with overlapping transitions
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${Math.max(1, total) * Math.round(viewport() * 0.85)}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    })

    cards.forEach((card, i) => {
      // Bring current card to center and scale to 1
      tl.to(
        card,
        {
          y: 0,
          scale: 1,
          duration: 0.6,
        },
        i === 0 ? 0 : "+=0.15",
      )

      // Overlap: as current card exits, the next card starts entering
      // This makes the sequence feel continuous and smoother.
      const outDistance = Math.round(viewport() * 1.05)

      // Current exits upward
      tl.to(
        card,
        {
          y: `-=${outDistance}`,
          duration: 0.7,
        },
        "+=0.1",
      )

      if (i < total - 1) {
        // Next card starts moving into center slightly before current finishes exiting
        tl.to(
          cards[i + 1],
          {
            y: 0,
            scale: 1,
            duration: 0.65,
          },
          "<0.28", // overlap with current's exit
        )

        // Keep the ladder feeling by lifting the remaining stack up one rung
        if (i + 1 < total - 1) {
          tl.to(
            cards.slice(i + 2),
            {
              y: `-=${spacing}`,
              duration: 0.55,
            },
            "<",
          )
        }
      }
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="highlights"
      className="relative min-h-screen w-full bg-background p-6 py-20 overflow-hidden"
      aria-label="Presidential Park Highlights"
    >
      <header className="relative w-full mt-8 mb-4">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-2">
          Presidential Park Highlights
        </h2>
        <p className="text-foreground/80 text-base md:text-lg max-w-xl mt-2">
          Discover the key features that make <span className="font-semibold text-accent">Presidential Park</span> a preferred community for premium living in Bangalore.
        </p>
      </header>
      {/* Cards Stack */}
      <div className="relative mt-8 md:mt-2 h-[78vh] md:h-[80vh]">
        {featuresData.map((data, index) => (
          <div
            key={index}
            className="feature-card"
            aria-hidden={false}
            aria-label={`Feature card ${index + 1} of ${featuresData.length}`}
          >
            <Card data={data} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feature