"use client"

import { ArrowLeft, Calendar, MapPin, Users, Camera, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { EventData } from "@/lib/events"
import { AnimatedSection } from "./animated-section"

export function EventDetailContent({ event }: { event: EventData }) {
  return (
    <main className="min-h-screen relative scanline-overlay">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#eventos"
            className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors duration-300 group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Voltar aos eventos
          </Link>
          <span className="hidden sm:block text-[10px] font-mono text-muted-foreground/30">
            {event.slug}.md
          </span>
        </div>
      </div>

      {/* Hero area */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className={`flex flex-col ${event.banner ? "md:flex-row md:items-center md:gap-10 mb-10" : ""}`}>
              {/* Text content */}
              <div className="flex-1 min-w-0">
                {/* Status badge */}
                <span
                  className={`inline-flex items-center px-3 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-widest mb-6 ${
                    event.status === "em-breve"
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "bg-muted text-muted-foreground border border-border/60"
                  }`}
                >
                  {event.status === "em-breve" ? "EM BREVE" : "REALIZADO"}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground font-mono">
                  {event.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-mono mb-10 md:mb-0">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary/50" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary/50" />
                    {event.location}
                  </span>
                  {event.participants && (
                    <span className="flex items-center gap-2">
                      <Users size={16} className="text-primary/50" />
                      {event.participants} participantes
                    </span>
                  )}
                </div>
              </div>

              {/* Banner image */}
              {event.banner && (
                <div className="relative w-full md:w-[280px] lg:w-[320px] flex-shrink-0 mt-8 md:mt-0">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-border/30 code-glow">
                    <Image
                      src={event.banner || "/placeholder.svg"}
                      alt={`Banner do evento ${event.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative rounded-xl border border-border/30 bg-card/20 overflow-hidden code-glow">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/20 bg-background/40">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/30 ml-2">
                  descricao.md
                </span>
              </div>
              <div className="p-6">
                <p className="text-foreground/90 text-lg leading-relaxed max-w-3xl">
                  {event.fullDescription}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      {/* Photos */}
      {event.photos && event.photos.length > 0 ? (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-8 font-mono">
                <Camera size={20} className="text-primary" />
                Fotos
                <span className="text-xs text-muted-foreground/30 font-normal ml-2">
                  {"// galeria"}
                </span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.photos.map((photo, index) => (
                <AnimatedSection
                  key={photo}
                  animation="scale-in"
                  delay={index * 100}
                >
                  <div className="group relative aspect-video rounded-xl overflow-hidden border border-border/30 bg-card/30 code-glow">
                    <Image
                      src={photo || "/placeholder.svg"}
                      alt={`Foto ${index + 1} do evento ${event.title}`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Videos */}
      {event.videos && event.videos.length > 0 ? (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-8 font-mono">
                <Play size={20} className="text-primary" />
                Videos
                <span className="text-xs text-muted-foreground/30 font-normal ml-2">
                  {"// highlights"}
                </span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {event.videos.map((video, index) => (
                <AnimatedSection
                  key={video.title}
                  animation="scale-in"
                  delay={index * 100}
                >
                  <a
                    href={video.url}
                    className="group block relative aspect-video rounded-xl overflow-hidden border border-border/30 bg-card/30 code-glow"
                  >
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_30px_hsl(270_70%_55%/0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_hsl(270_70%_55%/0.6)]">
                        <Play
                          size={22}
                          className="text-primary-foreground ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-foreground font-mono">
                        {video.title}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* No media placeholder for upcoming events */}
      {!event.photos && !event.videos && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="p-8 rounded-xl border border-border/30 bg-card/20 text-center code-glow">
                <Camera
                  size={32}
                  className="text-muted-foreground/50 mx-auto mb-3"
                />
                <p className="text-muted-foreground text-sm font-mono">
                  <span className="text-primary/30">{"// "}</span>
                  As fotos e videos serao publicados apos o evento. Fique ligado!
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-0 text-muted-foreground text-sm font-mono">
            <span className="text-muted-foreground/60 font-medium">{"from"}</span>
            <span className="font-black text-primary/60">{"Dev"}</span>
            <span className="text-muted-foreground/60 font-medium">{"to"}</span>
            <span className="font-black text-foreground/60">{"Dev"}</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
