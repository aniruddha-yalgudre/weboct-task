import React from 'react'

export default function FooterSection() {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: Logo and Tagline */}
        <div className="flex flex-col items-start">
          <span className="text-2xl font-medium text-neutral-900 dark:text-white tracking-tight uppercase"><a href="https://www.presidentialpark.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition">Presidential Park</a></span>
          <span className="text-sm mt-2 text-neutral-500 dark:text-neutral-400 tracking-wide">Modern Spaces by <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white transition">presidential park</a></span>
        </div>

        {/* Middle: Navigation */}
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          <a href="/about" className="text-neutral-600 dark:text-neutral-300 text-sm hover:underline hover:text-black dark:hover:text-white transition">
            About
          </a>
          <a href="/projects" className="text-neutral-600 dark:text-neutral-300 text-sm hover:underline hover:text-black dark:hover:text-white transition">
            Projects
          </a>
          <a href="/contact" className="text-neutral-600 dark:text-neutral-300 text-sm hover:underline hover:text-black dark:hover:text-white transition">
            Contact
          </a>
          <a href="/blog" className="text-neutral-600 dark:text-neutral-300 text-sm hover:underline hover:text-black dark:hover:text-white transition">
            Blog
          </a>
        </nav>

        {/* Right side: Socials */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <rect width="16" height="16" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="15.2" cy="4.8" r="1" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <rect width="20" height="20" rx="3.5" fill="none"/>
              <path d="M6.24 8.75H4.16v7H6.24v-7zM5.2 7.72a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zm2.57 8.03h2.08v-3.56c0-.85.32-1.43 1.11-1.43.61 0 .93.41.93 1.42v3.57h2.08v-3.81C14 9.42 13.21 9 12.64 9c-1.14 0-1.67.76-1.76 1.26V8.75H8.2c.03.48 0 7 0 7h-.43z"
                fill="currentColor"/>
            </svg>
          </a>
          <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.27 6.84 9.62.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.68-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.66.36-1.12.65-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.19 9.19 0 0112 7.09c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.21 2.44.1 2.7.64.71 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.37.33.7.98.7 1.98 0 1.43-.01 2.58-.01 2.93 0 .27.18.58.69.48C19.14 20.52 22 16.73 22 12.26 22 6.58 17.52 2 12 2z"
                fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-xs text-neutral-400 text-center border-t border-neutral-100 dark:border-neutral-800 py-4">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  )
}
