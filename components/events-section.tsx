"use client"

import { ArrowRight, Calendar, MapPin, Terminal } from "lucide-react"
import Link from "next/link"
import { events } from "@/lib/events"
import { AnimatedSection } from "./animated-section"

export function EventsSection() {
  const upcoming = events.filter((e) => e.status === "em-breve")
  const past = events.filter((e) => e.status === "realizado")

  return (
    <section id="eventos" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-md border border-primary/20 bg-background/80 text-xs font-mono text-primary mb-8 code-glow">
            <span className="text-primary/40 mr-2">{"//  "}</span>eventos
          </span>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-balance font-mono">
            Proximos & <span className="text-primary italic">passados</span>
          </h2>
        </AnimatedSection>

        {/* Upcoming events */}
        {upcoming.length > 0 && (
          <div className="mb-6">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4 px-1">
                <Terminal size={12} className="text-primary/50" />
                <span className="text-xs font-mono text-muted-foreground/50">
                  {"// em breve"}
                </span>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcoming.map((event, index) => (
                <AnimatedSection
                  key={event.slug}
                  animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={index * 100}
                >
                  <EventCard event={event} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}

        {/* Past events */}
        {past.length > 0 && (
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4 px-1 mt-8">
                <Terminal size={12} className="text-muted-foreground/30" />
                <span className="text-xs font-mono text-muted-foreground/40">
                  {"// realizados"}
                </span>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {past.map((event, index) => (
                <AnimatedSection
                  key={event.slug}
                  animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={index * 100}
                >
                  <EventCard event={event} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function EventCard({ event }: { event: (typeof events)[number] }) {
  return (
    <Link
      href={`/eventos/${event.slug}`}
      className="group relative block rounded-xl border border-border/40 bg-card/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/40 hover:shadow-[0_0_50px_hsl(270_70%_55%/0.06)] overflow-hidden"
    >
      {/* Terminal-style top bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/20 bg-background/30">
        <div className="flex gap-1.5">
          <span className={`w-2 h-2 rounded-full ${event.status === "em-breve" ? "bg-primary/60" : "bg-muted-foreground/20"}`} />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
        </div>
        <span className="text-[10px] font-mono text-muted-foreground/30 ml-2">
          {event.slug}.md
        </span>

        {/* Status badge */}
        <span
          className={`ml-auto inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-widest ${
            event.status === "em-breve"
              ? "bg-primary/15 text-primary border border-primary/30"
              : "bg-muted/50 text-muted-foreground border border-border/40"
          }`}
        >
          {event.status === "em-breve" ? "EM BREVE" : "REALIZADO"}
        </span>
      </div>

      <div className="p-6">
        {/* Line-number style content */}
        <div className="flex gap-4">
          <div className="hidden sm:flex flex-col items-end text-[10px] font-mono text-muted-foreground/15 leading-7 select-none">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary/90 transition-colors duration-300 font-mono">
              {event.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {event.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-primary/50" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-primary/50" />
                {event.location}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300 font-mono">
              <span className="text-primary/40">{">"}</span>
              Ver detalhes
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Top glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
    </Link>
  )
}
