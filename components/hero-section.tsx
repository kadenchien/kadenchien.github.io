"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !textRef.current) return

      const { clientX, clientY } = e
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      // Update CSS variables for the gradient effect
      containerRef.current.style.setProperty("--mouse-x", `${x}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y}px`)

      // Subtle text movement effect
      const moveX = (x - rect.width / 2) / 50
      const moveY = (y - rect.height / 2) / 50
      textRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    const container = containerRef.current
    container?.addEventListener("mousemove", handleMouseMove)

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 animate-gradient-shift"></div>

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container px-4 mx-auto text-center z-10">
        <motion.h1
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 animate-text-gradient">
            Kaden Chien
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Developer • Designer • Creator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full w-12 h-12 border border-violet-200 dark:border-violet-800 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 bg-white/10 backdrop-blur-sm"
            aria-label="Scroll to About section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce text-violet-600 dark:text-violet-400"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
