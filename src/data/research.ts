export interface ResearchLink {
  label: string;
  href: string;
  note: string;
}

export interface EvidenceItem {
  label: string;
  detail: string;
  limitation?: string;
}

export interface Investigation {
  slug: string;
  title: string;
  shortTitle: string;
  question: string;
  summary: string;
  status: string;
  started: string;
  updated?: string;
  topics: readonly string[];
  hypothesis?: string;
  evidence: readonly EvidenceItem[];
  method: readonly string[];
  findings: readonly string[];
  uncertainties: readonly string[];
  nextQuestions: readonly string[];
  links: readonly ResearchLink[];
  relatedProject?: { slug: string; name: string };
}

export const investigations: readonly Investigation[] = [
  {
    slug: 'from-detection-to-observation',
    title: 'From Detection to Observation',
    shortTitle: 'Detection → Observation',
    question:
      'When can an automated BirdNET detection become a trustworthy wildlife observation?',
    summary:
      'An evidence-gated investigation into what must happen between a classifier prediction and a defensible species observation at a Field Mouse station.',
    status: 'Awaiting reviewed data',
    started: '2026-08-05',
    updated: '2026-09-12',
    topics: ['wildlife', 'acoustics', 'BirdNET', 'evidence quality'],
    hypothesis:
      'Combining BirdNET output with human review and structured supporting evidence may produce more useful observations than treating classifier confidence alone as truth. The available data cannot yet test that idea.',
    evidence: [
      {
        label: 'Production-origin candidate pool',
        detail:
          'A read-only inventory contained 2,820 recordings and 1,034 BirdNET detections across multiple confidence bands and taxa.',
        limitation:
          'The pool contained zero human reviews and zero verification decisions, so it is not a ground-truth evaluation dataset.',
      },
      {
        label: 'Classifier predictions',
        detail:
          'The most frequent predicted taxa included Black-capped Chickadee, California Scrub-Jay, Dark-eyed Junco, Downy Woodpecker, and White-breasted Nuthatch.',
        limitation:
          'These names are automated predictions, not confirmed species occurrences.',
      },
      {
        label: 'Verification runtime benchmark',
        detail:
          'An isolated 1,000-iteration Raspberry Pi run supported the technical feasibility of the verification pipeline without observed service restarts or queue growth.',
        limitation:
          'Runtime feasibility says nothing about whether the verification improves identification accuracy.',
      },
    ],
    method: [
      'Inventory the available station database without modifying it.',
      'Keep raw recordings, BirdNET detections, verification evidence, human assessments, and resulting observations as distinct records.',
      'Have a qualified reviewer examine the original audio segment and a correctly scaled sonogram before assigning a review state.',
      'Freeze reviewed exports with provenance and use station/time-grouped development and held-out partitions.',
      'Add independently sampled background recordings before attempting to measure missed detections or recall.',
    ],
    findings: [
      'The station has a substantial pool of automated detections that could seed a reviewed dataset.',
      'BirdNET accuracy and the effect of the verification pipeline are currently not measurable from the documented pool.',
      'Running verification over unlabeled recordings would create more predictions, not scientific validation.',
      'Technical runtime feasibility is supported; scientific effectiveness is neither supported nor disproved.',
    ],
    uncertainties: [
      'No reviewed Field Mouse observations were available in the evaluated data snapshot.',
      'The false-positive rate and per-species reliability are unknown.',
      'A detection-only sample cannot reveal calls that every detector missed.',
      'Evidence sources may be correlated and could overstate confidence until tested by ablation and calibration.',
      'The documented performance run was isolated rather than a long unattended field observation.',
    ],
    nextQuestions: [
      'How much reviewer-labeled audio is needed for a useful first benchmark?',
      'Which evidence sources improve held-out precision without hiding real detections?',
      'How does reliability vary by species, confidence band, season, time, and acoustic condition?',
      'What background-sampling method can expose likely false negatives?',
      'How consistent are independent reviewers, and how should disagreements be adjudicated?',
    ],
    links: [
      {
        label: 'Scientific calibration report',
        href: 'https://github.com/amcowden97/project-field-mouse/blob/master/docs/verification-calibration-report.md',
        note: 'Dataset inventory, evidence limits, and calibration decision',
      },
      {
        label: 'Verification evaluation method',
        href: 'https://github.com/amcowden97/project-field-mouse/blob/master/docs/verification-evaluation.md',
        note: 'Review, export, benchmark, and sampling protocol',
      },
      {
        label: 'Reliability observation baseline',
        href: 'https://github.com/amcowden97/project-field-mouse/blob/master/docs/RELIABILITY_OBSERVATION_BASELINE.md',
        note: 'Station operating context and observation plan',
      },
    ],
    relatedProject: {
      slug: 'project-field-mouse',
      name: 'Project Field Mouse',
    },
  },
] as const;
