export const systemStatus = [
  { label: 'Field Mouse Station', value: 'ONLINE', active: true },
  { label: 'Current Experiment', value: 'Personal Website', active: false },
  { label: 'Current Research', value: 'Exploring...', active: false },
  { label: 'Coffee', value: 'READY', active: true },
  { label: 'Curiosity', value: 'NOMINAL', active: true },
] as const;

export const latestLog = [
  { date: '2026-08-18', message: 'Project archive indexed' },
  { date: '2026-08-17', message: 'New research investigation started' },
  { date: '2026-08-15', message: 'Project Field Mouse field work' },
  { date: '2026-08-12', message: 'Workbench inventory updated' },
] as const;

export const directories = [
  { slug: 'about', label: 'about', description: 'About Andy' },
  {
    slug: 'projects',
    label: 'projects',
    description: 'Software and hardware projects',
  },
  {
    slug: 'research',
    label: 'research',
    description: 'Research and investigations',
  },
  {
    slug: 'notes',
    label: 'notes',
    description: 'Working notes and observations',
  },
  { slug: 'creative', label: 'creative', description: 'Creative experiments' },
  { slug: 'contact', label: 'contact', description: 'Ways to get in touch' },
] as const;

export type Directory = (typeof directories)[number];
