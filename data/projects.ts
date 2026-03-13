export type Project = {
  slug: string;
  title: string;
  year: number;
  location: string;
  tags: string[];
  intro: string;
  cover: {
    src: string;
    alt: string;
  };
  images: {
    src: string;
    alt: string;
    layout: "full" | "wide" | "centered";
  }[];
};

export const projects: Project[] = [
  {
    slug: "berlin",
    title: "Kreuzberg Nights",
    year: 2025,
    location: "Berlin, Germany",
    tags: ["Street", "Documentary"],
    intro:
      "Fragmented scenes from Kreuzberg after dark—sodium light, slow cigarettes, and brief collisions at the edge of the frame.",
    cover: {
      src: "/projects/berlin/berlin-hero.jpg",
      alt: "Night street scene in Kreuzberg, Berlin",
    },
    images: [
      {
        src: "/projects/berlin/berlin-01.jpg",
        alt: "Berlin street, late night corner",
        layout: "full",
      },
      {
        src: "/projects/berlin/berlin-02.jpg",
        alt: "People waiting at a traffic light in Kreuzberg",
        layout: "centered",
      },
      {
        src: "/projects/berlin/berlin-03.jpg",
        alt: "U-Bahn entrance with silhouettes",
        layout: "wide",
      },
      {
        src: "/projects/berlin/berlin-04.jpg",
        alt: "Soft interior light spilling onto the street",
        layout: "centered",
      },
    ],
  },
  {
    slug: "india",
    title: "Between Stations",
    year: 2024,
    location: "India",
    tags: ["Travel", "Documentary"],
    intro:
      "A slow journey across cities and in-between spaces—train windows, waiting rooms, and the quiet choreography of strangers.",
    cover: {
      src: "/projects/india/india-hero.jpg",
      alt: "Train window view somewhere in India",
    },
    images: [
      {
        src: "/projects/india/india-01.jpg",
        alt: "View from a moving train",
        layout: "wide",
      },
      {
        src: "/projects/india/india-02.jpg",
        alt: "Passengers in a station waiting area",
        layout: "centered",
      },
      {
        src: "/projects/india/india-03.jpg",
        alt: "Morning light in a small town street",
        layout: "full",
      },
      {
        src: "/projects/india/india-04.jpg",
        alt: "Hands resting on a train window frame",
        layout: "centered",
      },
    ],
  },
  {
    slug: "italy",
    title: "Still Life, Moving City",
    year: 2023,
    location: "Italy",
    tags: ["Travel", "Editorial"],
    intro:
      "An editorial drift through Italian cities—sharp shadows, small gestures, and architecture as a quiet stage.",
    cover: {
      src: "/projects/italy/italy-hero.jpg",
      alt: "Sunlit Italian street with strong shadows",
    },
    images: [
      {
        src: "/projects/italy/italy-01.jpg",
        alt: "Sharp shadow on a warm-toned wall",
        layout: "centered",
      },
      {
        src: "/projects/italy/italy-02.jpg",
        alt: "Figure walking across a piazza",
        layout: "wide",
      },
      {
        src: "/projects/italy/italy-03.jpg",
        alt: "Interior scene with window light",
        layout: "centered",
      },
      {
        src: "/projects/italy/italy-04.jpg",
        alt: "Coastal road at dusk",
        layout: "full",
      },
    ],
  },
];