export interface EventData {
  slug: string
  title: string
  edition: string
  status: "em-breve" | "realizado"
  date: string
  location: string
  participants?: number
  description: string
  fullDescription: string
  banner?: string
  photos?: string[]
  videos?: { title: string; thumbnail: string; url: string }[]
}

export const events: EventData[] = [
  {
    slug: "lets-dev",
    title: "Lets Dev",
    edition: "Lets Dev",
    status: "em-breve",
    date: "Em breve",
    location: "A definir",
    description:
      "Um novo formato de evento ta chegando. Mais detalhes em breve.",
    fullDescription:
      "O Lets Dev e o mais novo evento da fromDevtoDev. Detalhes sobre data, local e formato serao revelados em breve. Fica ligado nas redes pra nao perder nada.",
  },
  {
    slug: "fromdevtodev-arena-2026",
    title: "fromDevtoDev Arena 2026",
    edition: "Arena 2026",
    status: "em-breve",
    date: "2026",
    location: "A definir",
    description:
      "O hackathon mais insano volta em 2026. Prepare-se pra mais horas de codigo non-stop.",
    fullDescription:
      "Depois do sucesso da primeira edicao em Pelotas, o fromDevtoDev Arena volta em 2026 ainda maior. Mais horas, mais times, mais desafios e mais energia. O hackathon que virou lenda ta de volta.",
  },
  {
    slug: "fromdevtodev-orbit",
    title: "fromDevtoDev Orbit",
    edition: "Orbit",
    status: "realizado",
    date: "7 de Setembro, 2024",
    location: "Pelotas, RS",
    participants: 80,
    description:
      "Palestras tecnicas de verdade. Devs no palco compartilhando codigo, erros e aprendizados reais.",
    fullDescription:
      "O fromDevtoDev Orbit foi um dia inteiro de palestras tecnicas em Pelotas. Devs de verdade no palco falando sobre codigo, arquitetura, decisoes de projeto e licoes aprendidas na pratica. Chimarrao, networking e comunidade gaucha reunida.",
    banner: "/images/orbit-banner.png",
    photos: [
      "/images/orbit-4.jpg",
      "/images/orbit-5.jpg",
      "/images/orbit-2.jpg",
      "/images/orbit-3.jpg",
      "/images/orbit-1.jpg",
      "/images/orbit-leave-mark.jpg",
    ],
  },
  {
    slug: "fromdevtodev-arena",
    title: "fromDevtoDev Arena",
    edition: "Arena",
    status: "realizado",
    date: "9 de Novembro, 2024",
    location: "Pelotas, RS",
    participants: 120,
    description:
      "Hackathon de 28h non-stop em Pelotas. Codigo, pizza, noites viradas e projetos insanos.",
    fullDescription:
      "O fromDevtoDev Arena foi um hackathon de 28 horas seguidas em Pelotas. Times formados na hora, desafios reais, mentoria ao vivo e muita energia. Quem aguentou ate o final saiu com projetos incriveis e historias pra contar.",
    banner:
      "/images/captura-20de-20tela-202026-02-11-20201043.png",
    photos: [
      "/images/dsc-0069.jpeg",
      "/images/dsc-0139.jpeg",
      "/images/dsc-0218.jpeg",
      "/images/dsc-0210.jpeg",
      "/images/dsc-0310.jpeg",
    ],
  },
]
