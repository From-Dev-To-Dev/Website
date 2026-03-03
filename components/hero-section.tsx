"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

function TerminalBadge({
  children,
  className,
  delay = "0s",
}: {
  children: string
  className?: string
  delay?: string
}) {
  return (
    <div
      className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-md border border-primary/20 bg-background/80 backdrop-blur-sm text-xs font-mono text-primary/70 animate-float code-glow ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="text-primary/40 select-none">$</span>
      {children}
    </div>
  )
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [text, started])

  return (
    <span>
      {displayed}
      <span className="typing-cursor">&nbsp;</span>
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg scanline-overlay">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(270 70% 55%) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating terminal badges */}
      <TerminalBadge className="absolute top-32 left-8 xl:left-24" delay="0s">
        {"<Community />"}
      </TerminalBadge>
      <TerminalBadge className="absolute top-48 right-8 xl:right-20" delay="1s">
        {'git commit -m "\uD83D\uDE80"'}
      </TerminalBadge>
      <TerminalBadge className="absolute bottom-48 left-8 xl:left-16" delay="2s">
        npm run dev
      </TerminalBadge>
      <TerminalBadge className="absolute bottom-32 right-8 xl:right-16" delay="3s">
        deploy --prod
      </TerminalBadge>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Terminal-style top comment */}
        <div className="mb-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground/50">
            <span className="text-primary/40">{"/*"}</span>
            <span>v0.4.0 - fromDevtoDev</span>
            <span className="text-primary/40">{"*/"}</span>
          </span>
        </div>

        {/* Main title */}
        <div className="mb-6 animate-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-foreground font-mono">
            from dev
            <br />
            to dev
            <span className="text-primary animate-glow inline-block">.</span>
          </h1>
        </div>

        {/* Subtitle styled like code output */}
        <div className="animate-fade-up delay-200">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-6 text-balance">
            Eventos que conectam{" "}
            <span className="text-primary relative">
              devs de verdade
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary/40" />
            </span>
          </h2>
        </div>

        {/* Description in terminal-style block */}
        <div className="animate-fade-up delay-300">
          <div className="inline-block max-w-xl mx-auto mb-10">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Hackathons, palestras e experiencias criadas por devs, para devs.
              <br className="hidden md:block" />
              Sem filtro. Sem enrolacao. Codigo real, historias reais.
            </p>
          </div>
        </div>

        {/* Terminal-style prompt before CTAs */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up delay-400">
          <span className="text-xs font-mono text-muted-foreground/40">
            <span className="text-primary/50">~</span>/fromdevtodev
          </span>
          <span className="text-xs font-mono text-primary/30">{">"}</span>
          <span className="text-xs font-mono text-muted-foreground/60">
            <TypewriterText text="ready to connect --devs" delay={1500} />
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
          <Link
            href="#eventos"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base font-mono overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_70%_55%/0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Ver proximos eventos</span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="#sobre"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border/80 text-foreground font-semibold text-base font-mono bg-transparent transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] code-glow"
          >
            Conhecer a marca
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
