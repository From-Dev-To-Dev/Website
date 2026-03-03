"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatedSection } from "./animated-section"

const stats = [
  { value: 580, suffix: "+", label: "Devs conectados" },
  { value: 4, suffix: "", label: "Eventos realizados" },
  { value: 12, suffix: "", label: "Palestras tecnicas" },
  { value: 3, suffix: "", label: "Hackathons epicos" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 px-6">
      {/* Top and bottom gradient lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
