"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Interests", href: "#interests" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="#home"
              className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600 transition-all duration-300"
              onClick={closeMenu}
            >
              Kaden Chien
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-neutral-700 dark:text-neutral-300 hover:from-violet-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  <Sun
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      mounted && theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
                    }`}
                  />
                  <Moon
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      mounted && theme === "dark" ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                </div>
              </button>
            </nav>

            <div className="flex items-center md:hidden">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 mr-2 rounded-full flex items-center justify-center bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-neutral-700 dark:text-neutral-300 hover:from-violet-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  <Sun
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      mounted && theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
                    }`}
                  />
                  <Moon
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      mounted && theme === "dark" ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                </div>
              </button>

              <button
                onClick={toggleMenu}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-neutral-700 dark:text-neutral-300 hover:from-violet-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:scale-110"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md pt-16 transition-colors duration-300"
          >
            <nav className="container mx-auto px-4 py-8">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 transition-all duration-300"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
