import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { DiscordSection } from "@/components/discord-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <DiscordSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
