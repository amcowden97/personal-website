export interface ProjectLink {
  label: string;
  href: string;
  note: string;
}

export interface Project {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  status: string;
  category: string;
  technologies: readonly string[];
  highlights: readonly string[];
  why: string;
  links: readonly ProjectLink[];
  accent: 'field' | 'marine' | 'home' | 'game';
  glyph: string;
}

export const projects: readonly Project[] = [
  {
    slug: 'project-field-mouse',
    name: 'Project Field Mouse',
    shortName: 'Field Mouse',
    tagline: 'Open-source wildlife monitoring for low-cost field stations.',
    summary:
      'A Raspberry Pi platform that records environmental audio, identifies birds with BirdNET, verifies detections, and presents observations through a local web dashboard.',
    status: 'Release candidate',
    category: 'Wildlife technology',
    technologies: ['Raspberry Pi', 'Python', 'BirdNET', 'Flask', 'SQLite'],
    highlights: [
      'Automated acoustic recording and species identification',
      'Multiple verification layers for more useful observations',
      'Designed for reliable, unattended field deployment',
      'Open-source architecture intended to support more wildlife taxa',
    ],
    why: 'To make long-term biodiversity observation approachable with inexpensive hardware and an understandable open-source system.',
    links: [
      {
        label: 'Source repository',
        href: 'https://github.com/amcowden97/project-field-mouse',
        note: 'Code and documentation on GitHub',
      },
      {
        label: 'Project website',
        href: 'https://project-field-mouse.com',
        note: 'Public project site',
      },
    ],
    accent: 'field',
    glyph: '::',
  },
  {
    slug: 'project-harbor-porpoise',
    name: 'Project Harbor Porpoise',
    shortName: 'Harbor Porpoise',
    tagline: 'Local-first vessel awareness for Puget Sound.',
    summary:
      'A marine-awareness prototype for exploring recorded AIS vessel positions around Bremerton, with local persistence, replay experiments, and a modular path toward future data sources.',
    status: 'Maintenance mode',
    category: 'Marine technology',
    technologies: ['AIS', 'Python', 'FastAPI', 'SQLite', 'MapLibre'],
    highlights: [
      'Recorded NMEA AIS import and deterministic fixture data',
      'Interactive vessel visualization and historical replay APIs',
      'Local-first operation without commercial feed credentials',
      'Data-source boundary designed for future receiver hardware',
    ],
    why: 'To make marine traffic around Puget Sound easier to explore while keeping the data pipeline small, local, and open to future hardware experiments.',
    links: [
      {
        label: 'Source repository',
        href: 'https://github.com/amcowden97/project-harbor-porpoise',
        note: 'Code and documentation on GitHub',
      },
    ],
    accent: 'marine',
    glyph: '≈>',
  },
  {
    slug: 'project-whack-a-mole',
    name: 'Project Whack-a-Mole',
    shortName: 'Whack-a-Mole',
    tagline: 'Lower-pressure household maintenance, one useful task at a time.',
    summary:
      'A home-health system that tracks maintenance, recommends small achievable recovery actions, and supports conversational coaching through SMS.',
    status: 'In development',
    category: 'Home systems',
    technologies: ['Python', 'FastAPI', 'SQLite', 'Twilio SMS'],
    highlights: [
      'Home and area health derived from maintenance schedules',
      'Small tasks ranked by likely improvement per minute',
      'Conversational completion language and SMS coaching',
      'Clear history, consent, and recovery recommendations',
    ],
    why: 'To reduce the pressure of an ever-growing overdue list by turning household care into small, understandable interventions.',
    links: [
      {
        label: 'Source repository',
        href: 'https://github.com/amcowden97/project-whack-a-mole',
        note: 'Code and documentation on GitHub',
      },
      {
        label: 'SMS information site',
        href: 'https://amcowden97.github.io/project-whack-a-mole/',
        note: 'Public enrollment and policy information',
      },
    ],
    accent: 'home',
    glyph: '[+]',
  },
  {
    slug: 'butter-boy',
    name: 'Butter Boy',
    shortName: 'Butter Boy',
    tagline: 'A tiny pixel-art adventure in a world of food.',
    summary:
      'A creative 2D game experiment combining a small food-world adventure with character design, pixel art, music, and playful engineering.',
    status: 'Creative experiment',
    category: 'Game project',
    technologies: ['2D game design', 'Pixel art', 'Music experimentation'],
    highlights: [
      'A tiny protagonist and food-inspired world',
      'Character and environment design through pixel art',
      'Game mechanics developed alongside visual storytelling',
      'An experimental space for art, music, and code',
    ],
    why: 'To explore how code, art, sound, and character design can meet inside a small handmade game world.',
    links: [],
    accent: 'game',
    glyph: '■',
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
