"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const AMENITIES = [
  { name: "Club house", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", speed: "0.5" },
  { name: "Swimming pool", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", speed: "0.8" },
  { name: "Indoor games", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", speed: "0.3" },
  { name: "Temple and Pergola", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80", speed: "0.6" },
  { name: "Yoga deck", image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80", speed: "0.4" },
  { name: "Meditation area", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80", speed: "0.7" },
  { name: "Bonfire Area", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", speed: "0.2" },
  { name: "Barque Area", image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80", speed: "0.9" },
  { name: "Party Lawn", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", speed: "0.5" },
  { name: "Jogging and Walking track", image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80", speed: "0.3" },
  { name: "Kids Play Area", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", speed: "0.8" },
  { name: "Senior citizen sit outs", image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80", speed: "0.4" },
  { name: "Multi-purpose Hall", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", speed: "0.6" },
  { name: "Gazebo cover seating", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80", speed: "0.7" },
  { name: "Pet Care Centre", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", speed: "0.2" },
  { name: "Garden GYM", image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80", speed: "0.9" },
  { name: "Net Cricket", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80", speed: "0.5" },
  { name: "Toddlers Play area", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", speed: "0.3" },
  { name: "Water Fountain", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80", speed: "0.8" },
  { name: "Acupressure Path", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", speed: "0.4" },
  { name: "Multi-purpose court", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80", speed: "0.6" },
  { name: "Sand Pit", image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80", speed: "0.7" },
];

const AmenityCard = ({ amenity, index }: { amenity: typeof AMENITIES[0], index: number }) => {
  return (
    <div 
      className="amenity-card group cursor-pointer"
      data-scroll
      data-scroll-speed={amenity.speed}
      data-scroll-direction="vertical"
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
        {/* Full height and width image */}
        <div className="relative w-full h-full">
          <Image
            src={amenity.image}
            alt={amenity.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={index < 8}
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Minimal text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-semibold text-sm md:text-base leading-tight drop-shadow-lg">
            {amenity.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize locomotive scroll if available
    if (typeof window !== 'undefined') {
      const locomotiveScroll = (window as any).locomotiveScroll;
      if (locomotiveScroll) {
        locomotiveScroll.update();
      }
    }
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative w-full min-h-screen py-16 px-4 md:px-6"
      data-scroll-section
    >
      {/* Header Section */}
      <div 
        className="text-center mb-16"
      >
        <h2 
          className="font-serif text-accent drop-shadow-lg text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6"
          style={{ letterSpacing: "0.05em", textShadow: "0 2px 10px rgba(70,70,110,0.23)" }}
        >
          Premium Amenities
        </h2>
        <p 
          className="text-foreground/80 text-lg md:text-xl mb-8 font-medium max-w-3xl mx-auto bg-white/20 rounded-xl py-3 px-6 backdrop-blur-sm shadow-lg"
          style={{ textShadow: "0 2px 30px #fff2" }}
        >
          Discover a world of thoughtfully curated amenities designed for a life that blends luxury, fun, tranquility and well-being.
        </p>
      </div>

      {/* Grid Layout - 4 columns, auto rows */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mx-auto mb-16">
        {AMENITIES.map((amenity, index) => (
          <AmenityCard 
            key={`${amenity.name}-${index}`}
            amenity={amenity}
            index={index}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div 
        className="text-center"
        data-scroll
        data-scroll-speed="0.1"
      >
        <button
          className="px-8 py-4 rounded-full bg-accent font-bold text-lg text-white shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent active:scale-95 drop-shadow-md"
        >
          Book a Free Site Visit
        </button>
      </div>
    </div>
  );
}
