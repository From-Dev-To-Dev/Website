"use client"

import { Mic, Code, Users, Zap } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const features = [
  {
    icon: Mic,
    title: "Palestras sem filtro",
    description:
      "Talks com codigo real, erros de producao e licoes que ninguem te conta nos tutoriais.",
    tag: "talks",
  },
  {
    icon: Code,
    title: "Hackathons epicos",
    description:
      "Maratonas de codigo onde times nascem, projetos surgem e a criatividade explode.",
    tag: "hack",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Uma rede de devs de todas as stacks que se ajudam, trocam ideias e crescem juntos.",
    tag: "network",
  },
  {
    icon: Zap,
    title: "Experiencia real",
    description:
      "Cada evento e pensado pra quem vive codigo. Nada de palestra motivacional generica.",
    tag: "xp",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-32 px-6">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-md border border-primary/20 bg-background/80 text-xs font-mono text-primary mb-8 code-glow">
            <span className="text-primary/40 mr-2">{"//  "}</span>sobre nos
          </span>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-balance font-mono">
            De dev, <span className="text-primary italic">para dev</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A fromDevtoDev nasceu da vontade de criar eventos que realmente facam
            sentido pra quem programa. Sem bullshit corporativo, sem palestrante
            de LinkedIn. Aqui e codigo na veia, experiencia real e comunidade de
            verdade.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="group relative h-full rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/60 hover:shadow-[0_0_40px_hsl(270_70%_55%/0.08)] overflow-hidden">
                {/* Terminal-style top bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-background/40">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/40 ml-2">
                    {feature.tag}.tsx
                  </span>
                </div>

                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(270_70%_55%/0.2)]">
                    <feature.icon
                      size={22}
                      className="text-primary transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Line numbers decoration */}
                  <div className="flex gap-3">
                    <div className="hidden sm:flex flex-col items-end text-[10px] font-mono text-muted-foreground/20 leading-6 select-none pt-0.5">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold text-lg mb-2 font-mono">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover gradient line */}
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
