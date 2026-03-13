export type Project = {
    slug: string;
    title: string;
    year: number;
    tags: string[];
    intro: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "berlin",
      title: "Berlin",
      year: 2025,
      tags: ["Street", "Portrait"],
      intro:
        "Berlin in fragmentierten Szenen: klare Linien, harte Kontraste, kurze Begegnungen.",
    },
    {
      slug: "india",
      title: "India",
      year: 2024,
      tags: ["Travel", "Documentary"],
      intro:
        "A journey through cities, trains, and quiet in-between moments.",
    },
    {
      slug: "italy",
      title: "Italy",
      year: 2023,
      tags: ["Travel", "Editorial"],
      intro:
        "A study of light, architecture, and gestures between coast and city.",
    },
  ];