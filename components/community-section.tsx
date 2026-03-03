"use client"

import {
  Instagram,
  Twitter,
  Github,
  MessageCircle,
  Users,
  Briefcase,
  BookOpen,
  HelpCircle,
  Megaphone,
  ArrowUpRight,
  Star,
  Mic,
  Gift,
  Ticket,
} from "lucide-react"
import { AnimatedSection } from "./animated-section"

const socials = [
  { icon: Instagram, label: "Instagram", handle: "@fromdevtodev", href: "#" },
  { icon: Twitter, label: "Twitter / X", handle: "@fromdevtodev", href: "#" },
  { icon: Github, label: "GitHub", handle: "fromdevtodev", href: "#" },
  { icon: MessageCircle, label: "Discord", handle: "fromdevtodev", href: "https://discord.gg/fromdevtodev" },
]

const discordAdvantages = [
  {
    icon: Users,
    title: "Networking real",
    description:
      "Conecte-se com devs de todas as stacks, troque experiencias e faca contatos que realmente importam.",
    tag: "networking",
  },
  {
    icon: Briefcase,
    title: "Vagas exclusivas",
    description:
      "Canal dedicado com oportunidades de emprego compartilhadas pela propria comunidade.",
    tag: "jobs",
  },
  {
    icon: BookOpen,
    title: "Conteudo tecnico",
    description:
      "Discussoes sobre arquitetura, code reviews, novas tecnologias e dicas que voce so acha aqui.",
    tag: "content",
  },
  {
    icon: HelpCircle,
    title: "Ajuda em tempo real",
    description:
      "Travou num bug? Posta la que sempre tem alguem pra dar aquela forca.",
    tag: "help",
  },
  {
    icon: Megaphone,
    title: "Acesso antecipado",
    description:
      "Fique sabendo primeiro sobre novos eventos, inscricoes e novidades da comunidade.",
    tag: "early-access",
  },
  {
    icon: MessageCircle,
    title: "Canais por stack",
    description:
      "Frontend, backend, mobile, devops, data -- cada stack tem seu espaco pra trocar ideia.",
    tag: "channels",
  },
]

export function CommunitySection() {
  return (
    <section id="comunidade" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-md border border-primary/20 bg-background/80 text-xs font-mono text-primary mb-8 code-glow">
            <span className="text-primary/40 mr-2">$</span>connect --community
          </span>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-balance font-mono">
            Faz parte da{" "}
            <span className="text-primary italic">comunidade</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Siga a gente pra saber dos proximos eventos, ver conteudo tecnico e
            trocar ideia com devs de todo o Brasil.
          </p>
        </AnimatedSection>

        {/* Social links */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {socials.map((social, index) => (
            <AnimatedSection
              key={social.label}
              animation="scale-in"
              delay={index * 80}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-card/20 transition-all duration-500 hover:border-primary/30 hover:bg-card/40 hover:shadow-[0_0_40px_hsl(270_70%_55%/0.08)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="w-full flex items-center gap-1.5 px-3 py-2 border-b border-border/20 bg-background/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/15" />
                </div>
                <div className="px-4 pb-5 pt-2 flex flex-col items-center gap-3">
                  <social.icon
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="text-center">
                    <span className="block text-sm font-medium font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {social.label}
                    </span>
                    <span className="block text-[10px] font-mono text-muted-foreground/30 mt-1">
                      {social.handle}
                    </span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Discord sub-header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-md border border-primary/20 bg-background/80 text-xs font-mono text-primary mb-6 code-glow">
            <span className="text-primary/40 mr-2">{">"}</span>join --server discord
          </span>

          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-balance font-mono">
            Nosso <span className="text-primary italic">Discord</span>
          </h3>

          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            O server da fromDevtoDev e onde a comunidade vive de verdade. Mais de
            500 devs ativos trocando ideia, se ajudando e crescendo juntos todo dia.
          </p>
        </AnimatedSection>

        {/* Discord advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {discordAdvantages.map((advantage, index) => (
            <AnimatedSection
              key={advantage.title}
              animation="scale-in"
              delay={index * 80}
            >
              <div className="group relative h-full rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/60 hover:shadow-[0_0_40px_hsl(270_70%_55%/0.08)] overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-background/40">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/40 ml-2">
                    #{advantage.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(270_70%_55%/0.2)]">
                    <advantage.icon
                      size={22}
                      className="text-primary transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="hidden sm:flex flex-col items-end text-[10px] font-mono text-muted-foreground/20 leading-6 select-none pt-0.5">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold text-lg mb-2 font-mono">
                        {advantage.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Points System */}
        <AnimatedSection className="mb-12">
          <div className="relative rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-background/40">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary/40" />
                <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
                <span className="w-2 h-2 rounded-full bg-muted-foreground/20" />
              </div>
              <span className="text-[10px] font-mono text-primary/50 ml-2">
                sistema-de-pontos.config
              </span>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                      <Star size={20} className="text-primary" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-black font-mono text-foreground">
                      Sistema de Pontos
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                    Cada mensagem que voce manda e cada minuto em call gera pontos
                    automaticamente. Quanto mais voce participa, mais pontos acumula
                    -- e eles valem recompensas de verdade.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border/40 bg-background/30">
                      <MessageCircle size={18} className="text-primary/70 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm font-mono font-bold">Conversar</p>
                        <p className="text-muted-foreground text-xs">Pontos por mensagem nos canais</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border/40 bg-background/30">
                      <Mic size={18} className="text-primary/70 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm font-mono font-bold">Ficar em call</p>
                        <p className="text-muted-foreground text-xs">Pontos por tempo em canais de voz</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[320px] flex-shrink-0">
                  <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest mb-3">
                    Troque seus pontos por
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="group flex items-center gap-4 px-4 py-3.5 rounded-lg border border-border/40 bg-background/30 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">
                      <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <Gift size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-mono font-bold">Brindes exclusivos</p>
                        <p className="text-muted-foreground text-xs">Resgate brindes da comunidade</p>
                      </div>
                    </div>
                    <div className="group flex items-center gap-4 px-4 py-3.5 rounded-lg border border-border/40 bg-background/30 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">
                      <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <Ticket size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-mono font-bold">Descontos em eventos</p>
                        <p className="text-muted-foreground text-xs">Desconto em ingressos dos proximos eventos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </AnimatedSection>

        {/* Discord CTA */}
        <AnimatedSection className="text-center">
          <a
            href="https://discord.gg/fromdevtodev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-mono font-bold text-base transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_40px_hsl(270_70%_55%/0.3)] hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Entrar no Discord
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <p className="text-muted-foreground/50 text-xs font-mono mt-4">
            gratuito e aberto pra todos os devs
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
