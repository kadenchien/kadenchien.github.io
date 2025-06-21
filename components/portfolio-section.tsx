"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Trackboxd",
    description: "An app I'm currently building that is like letterboxd, but for music.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next", "Node.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/kadenchien/trackboxd",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Cross-Partition Order Book Engine",
    description: "A high-performance order book engine that supports cross-partition trading, built with Kafka and Redis.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Kafka", "Redis"],
    github: "https://github.com/kadenchien/crosspartitionorderbook",
    demo: "https://example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "UFC Fight Predictor",
    description: "A neural network me and a friend built to predict the outcome of UFC fights based on historical data, with around 80% accuracy.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "TensorFlow"],
    github: "https://github.com/kadenchien/UFC-Prediction-NN",
    demo: "https://example.com",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Mini-Amazon",
    description: "A full-stack e-commerce application with user authentication, product management, and other features like coupon codes and reviews.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Flask", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Duke Stats API",
    description: "A web scraper that collects statistics for Duke University sports teams, then ports that data to a public API.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["BeautifulSoup", "Requests", "Postman"],
    github: "https://github.com/kadenchien/DukeStatsAPI",
    demo: "https://example.com",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Covid Death Conditions",
    description: "A neural network that detects patients that are at risk of dying from COVID-19 based on their health records.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "TensorFlow", "Pandas"],
    github: "https://github.com/kadenchien/Covid-Death-Conditions",
    demo: "https://example.com",
    color: "from-emerald-500 to-green-500",
  },
]

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-950 dark:via-black dark:to-cyan-950"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10"></div>

      <div className="container px-4 mx-auto relative z-10">  
        <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">
            My Portfolio
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">A showcase of my recent projects and work</p>
        </motion.div>

        <motion.div style={{ opacity, y }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50"
            >
              <div className="relative h-48 overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10`}
                ></div>

                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-neutral-200 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-neutral-200 transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
