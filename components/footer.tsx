export function Footer() {
  return (
    <footer className="relative border-t border-border/30 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-0 text-muted-foreground text-sm font-mono">
          <span className="text-muted-foreground/60 font-medium">{"from"}</span>
          <span className="font-black text-primary/60">{"Dev"}</span>
          <span className="text-muted-foreground/60 font-medium">{"to"}</span>
          <span className="font-black text-foreground/60">{"Dev"}</span>
          <span className="ml-2 text-muted-foreground/40">{"\u00A9 2025"}</span>
        </div>

        <p className="text-sm text-muted-foreground/50 font-mono">
          <span className="text-primary/30">{"// "}</span>
          Feito com{" "}
          <span className="text-primary/60" aria-label="amor">
            {"\u2764"}
          </span>{" "}
          pela comunidade
        </p>
      </div>
    </footer>
  )
}
