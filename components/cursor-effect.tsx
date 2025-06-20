"use client"

import { useEffect, useRef } from "react"

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const cursorPosition = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    // Mouse move handler - just update position, no DOM manipulation
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    // Hover handlers
    const handleMouseEnter = () => {
      isHovering.current = true
      cursor.style.transform = `translate(${mousePosition.current.x - 24}px, ${mousePosition.current.y - 24}px) scale(1.5)`
      cursor.style.backgroundColor = "rgba(139, 92, 246, 0.1)"
      cursor.style.borderColor = "rgba(139, 92, 246, 0.8)"
    }

    const handleMouseLeave = () => {
      isHovering.current = false
      cursor.style.transform = `translate(${mousePosition.current.x - 16}px, ${mousePosition.current.y - 16}px) scale(1)`
      cursor.style.backgroundColor = "transparent"
      cursor.style.borderColor = "rgba(139, 92, 246, 0.5)"
    }

    // Smooth animation loop using requestAnimationFrame
    const animateCursor = () => {
      // Direct following - no delay
      cursor.style.transform = `translate(${mousePosition.current.x - 16}px, ${mousePosition.current.y - 16}px)`
      cursorDot.style.transform = `translate(${mousePosition.current.x - 2}px, ${mousePosition.current.y - 2}px)`

      requestAnimationFrame(animateCursor)
    }

    // Start animation loop
    animateCursor()

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']")
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 hidden md:block rounded-full border border-violet-500/50 transition-all duration-200 ease-out"
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50 hidden md:block rounded-full bg-violet-500"
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />
    </>
  )
}
