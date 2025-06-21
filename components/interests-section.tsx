"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Music, Camera, Book, Plane, Coffee, Gamepad } from "lucide-react"

const interests = [
  {
    icon: <Music className="w-6 h-6" />,
    title: "Music",
    description: "Avid listener of various genres, from indie to classical. I also play the cello!",
    color: "from-violet-600 to-purple-600",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photography",
    description: "Capturing moments and perspectives through my lens whenever I travel.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Travel",
    description: "Visiting new places and experiencing different cultures and cuisines is always exciting, and I'll be studying abroad in Madrid next semester!",
    color: "from-cyan-600 to-teal-600",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Coffee",
    description: "I'm always looking to try different coffee blends and brewing methods.",
    color: "from-amber-600 to-orange-600",
  },
  {
    icon: <Gamepad className="w-6 h-6" />,
    title: "Games",
    description: "Love playing strategy games like TFT as well as single-player RPGs.",
    color: "from-emerald-600 to-green-600",
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Reading",
    description: "Starting to get back into reading, especially psychology and philosophy books.",
    color: "from-pink-600 to-rose-600",
  },
]

export default function InterestsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="interests" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-violet-50 dark:from-black dark:to-violet-950 opacity-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">
            My Interests
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Beyond coding, here's what keeps me inspired and balanced
          </p>
        </motion.div>

        <motion.div style={{ opacity, y }} className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
              ></div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              {/* Animated dots */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/30 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/30 animate-pulse animation-delay-1000"></div>

              <div className="relative h-full w-full p-6 flex flex-col items-center justify-center text-center text-white z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                <p className="text-white/80 text-sm">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
