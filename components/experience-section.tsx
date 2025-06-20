"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Company",
    period: "2021 - Present",
    description:
      "Led development of key features for flagship product. Mentored junior developers and implemented best practices across the team.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2021",
    description:
      "Built responsive web applications for various clients. Collaborated with designers to implement pixel-perfect interfaces.",
  },
  {
    title: "Junior Developer",
    company: "Startup Inc.",
    period: "2016 - 2018",
    description:
      "Developed and maintained company website. Assisted in building the company's first mobile application.",
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-violet-50 dark:from-black dark:to-violet-950 opacity-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">
            Work Experience
          </h2>

          <div className="relative border-l border-gradient-to-b from-violet-300 to-cyan-300 dark:from-violet-600 dark:to-cyan-600 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-white dark:bg-black border-2 border-violet-400 dark:border-violet-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                </div>

                <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:border-violet-200 dark:hover:border-violet-800 transition-colors duration-300 group">
                  <span className="text-sm font-medium text-violet-500 dark:text-violet-400 block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <h4 className="text-neutral-600 dark:text-neutral-400 font-medium mb-3">{exp.company}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
