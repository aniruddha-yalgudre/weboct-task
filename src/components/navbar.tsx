"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/primitives/sheet";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Highlights", href: "#highlights" },
  { name: "Plans", href: "#plans" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Enquiry", href: "#enquiry" },
];

function Architectlogo({ className = "" }: { className?: string }) {
  return (
    <a href="/" aria-label="Home">
      <img src="https://www.presidentialpark.in/assets/imgs/footerlo.png" alt="" width={40} height={40} className={className} />
    </a>
);
}

export default function Navbar() {
  return (
    <nav className="fixed w-full z-[999] bg-background/80 backdrop-blur flex items-center py-4 px-6 border-b border-border">
      <div className="flex w-full  items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Architectlogo />
          <span className="font-serif font-semibold text-lg tracking-wide text-primary">
            Presidential Park
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#enquiry"
            className="rounded px-4 py-2 bg-accent text-accent-foreground hover:opacity-90 transition"
          >
            Enquire
          </a>
        </div>

        {/* Mobile Sheet/Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger
              aria-label="Open Menu"
              className="flex items-center justify-center text-2xl p-2 rounded-md hover:bg-muted/30 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[80vw] max-w-xs sm:max-w-sm bg-background border-l">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <Architectlogo className="w-8 h-8" />
                    <span className="font-serif font-semibold text-lg tracking-wide text-primary">
                      Presidential Park
                    </span>
                  </div>
                  <SheetClose
                    aria-label="Close Menu"
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted/30"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                    >
                      <line
                        x1="18"
                        y1="6"
                        x2="6"
                        y2="18"
                        strokeLinecap="round"
                      />
                      <line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                        strokeLinecap="round"
                      />
                    </svg>
                  </SheetClose>
                </div>
                <div className="flex flex-col gap-2 px-4 py-6">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        className="py-2 px-2 rounded hover:bg-muted/40 font-medium text-base transition-colors"
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto pb-5 px-4">
                  <a
                    href="#enquiry"
                    className="inline-block rounded px-4 py-2 bg-accent text-accent-foreground"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}