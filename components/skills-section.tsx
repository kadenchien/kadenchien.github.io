"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Palette, Database, Globe, Cpu, LineChart } from "lucide-react"

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, HTML/CSS",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Backend Development",
    description: "Node.js, Java, C, Python",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "DevOps",
    description: "Docker, CI/CD, AWS, Vercel",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Technologies",
    description: "REST APIs, GraphQL, WebSockets",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Database Management",
    description: "Postgres, SQL, MongoDB",
    color: "from-emerald-500 to-green-500",
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-950 dark:via-black dark:to-cyan-950"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">
            My Skills
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            A collection of technologies and tools I've mastered throughout my journey
          </p>
        </motion.div>

        <motion.div style={{ opacity, y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50 group"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
