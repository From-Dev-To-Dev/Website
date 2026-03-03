import { events } from "@/lib/events"
import { notFound } from "next/navigation"
import { EventDetailContent } from "@/components/event-detail-content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)

  if (!event) {
    notFound()
  }

  return <EventDetailContent event={event} />
}
