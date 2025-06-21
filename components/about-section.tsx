"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-violet-50 dark:from-black dark:to-violet-950 opacity-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div style={{ opacity, y }} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600">
              About Me
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Hey there! I'm Kaden, a rising junior at Duke studying Computer Science and Math. I'm currently interning at AWS where 
              I'm working on frontend infrastructure for the AWS Accounts Management console. I am particularly interested in systems development,
              quant research, and frontend engineering.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Outside of work and school, I'm always looking for ways to blend my interests with creative projects — whether that's building web apps, 
              exploring new technologies, or just picking up new hobbies. I'm also a huge music fan, some of my favorite artists inclue KAYTRANADA, Tyler the Creator, and mindfreakkk.
              I also love watching and playing sports, especially basketball and football. 
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Feel free to reach out if you want to chat about tech, music, or anything else!
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-purple-500 to-cyan-500 animate-rotate-slow"></div>
              <div className="absolute inset-2 rounded-full bg-white dark:bg-black overflow-hidden">
                <Image
                  src="/IMG_8106.jpg?height=400&width=400"
                  alt="Your Name"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cyan-400 opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-purple-400 opacity-70 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
