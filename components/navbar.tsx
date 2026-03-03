"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-0 font-mono text-sm tracking-tight">
          <span className="text-muted-foreground font-medium">{"from"}</span>
          <span className="font-black text-primary transition-all duration-300 group-hover:text-primary/80">{"Dev"}</span>
          <span className="text-muted-foreground font-medium">{"to"}</span>
          <span className="font-black text-foreground">{"Dev"}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="#sobre"
            className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-md transition-all duration-300"
          >
            Sobre
          </Link>
          <Link
            href="#eventos"
            className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-md transition-all duration-300"
          >
            Eventos
          </Link>
          <Link
            href="#discord"
            className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-md transition-all duration-300"
          >
            Discord
          </Link>
          <Link
            href="#comunidade"
            className="px-4 py-2 text-sm font-mono text-primary hover:text-primary/80 hover:bg-primary/5 rounded-md transition-all duration-300 font-medium"
          >
            Comunidade
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-1 bg-background/95 backdrop-blur-xl border-b border-border/50">
          <Link
            href="#sobre"
            className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-md transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-primary/30 mr-2">{">"}</span>Sobre
          </Link>
          <Link
            href="#eventos"
            className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-md transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-primary/30 mr-2">{">"}</span>Eventos
          </Link>
          <Link
            href="#discord"
            className="px-3 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-md transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-primary/30 mr-2">{">"}</span>Discord
          </Link>
          <Link
            href="#comunidade"
            className="px-3 py-2 text-sm font-mono text-primary hover:text-primary/80 hover:bg-primary/5 rounded-md transition-colors font-medium"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-primary/30 mr-2">{">"}</span>Comunidade
          </Link>
        </div>
      </div>
    </nav>
  )
}
