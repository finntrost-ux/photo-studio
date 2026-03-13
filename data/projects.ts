export type Project = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  intro: string;
  cover: {
    src: string;
    alt: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
};
  
  export const projects: Project[] = [
    {
      slug: "berlin",
      title: "Berlin",
      year: 2025,
      tags: ["Street", "Portrait"],
      intro:
        "Berlin in fragmentierten Szenen: klare Linien, harte Kontraste, kurze Begegnungen.",
      cover: { src: "/window.svg", alt: "Berlin cover" },
      gallery: [
        { src: "/window.svg", alt: "Berlin photo 1" },
        { src: "/file.svg", alt: "Berlin photo 2" },
        { src: "/vercel.svg", alt: "Berlin photo 3" },
      ],
    },
    {
      slug: "india",
      title: "India",
      year: 2024,
      tags: ["Travel", "Documentary"],
      intro:
        "A journey through cities, trains, and quiet in-between moments.",
      cover: { src: "/file.svg", alt: "India cover" },
      gallery: [
        { src: "/file.svg", alt: "India photo 1" },
        { src: "/window.svg", alt: "India photo 2" },
        { src: "/vercel.svg", alt: "India photo 3" },
      ],
    },
    {
      slug: "italy",
      title: "Italy",
      year: 2023,
      tags: ["Travel", "Editorial"],
      intro:
        "A study of light, architecture, and gestures between coast and city.",
      cover: { src: "/vercel.svg", alt: "Italy cover" },
      gallery: [
        { src: "/vercel.svg", alt: "Italy photo 1" },
        { src: "/window.svg", alt: "Italy photo 2" },
        { src: "/file.svg", alt: "Italy photo 3" },
      ],
    },
  ];