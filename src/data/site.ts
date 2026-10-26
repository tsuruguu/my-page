// Cała treść strony. Zmieniasz teksty tutaj – komponenty tylko je wyświetlają.

export interface Project {
  meta: string;
  title: string;
  text: string;
  tags: string[];
  highlight?: boolean; // różowe meta = nagroda
  link?: string;
}

export interface Job {
  when: string;
  role: string;
  org: string;
  text: string;
}

export interface SpaceItem {
  when: string;
  title: string;
  text: string;
}

export interface Post {
  title: string;
  date: string;
  topic: string;
  href?: string;
}

export const site = {
  name: 'Dobrawa Rumszewicz',
  first: 'Dobrawa',
  last: 'Rumszewicz',
  handle: '~/dobrawa',
  description:
    'Founder-engineer building aviation SaaS, drone detection, port intelligence and rocket ground stations. Backend, embedded, AI and security.',
  openToWork: true,
  email: 'dobrawa04@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/tsuruguu' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dobrawa-rumszewicz' },
    { label: 'TryHackMe', href: 'https://tryhackme.com/p/tsuruguu' },
  ],
};

export const hero = {
  lead: 'Founder-engineer who builds from problem to deployment — aviation SaaS, drone detection, port intelligence and rocket ground stations. Backend, embedded, AI and security.',
  whoami: [
    ['now', 'backend & DB engineer @ MAG'],
    ['build', 'founder AeroCue · CTO SentiGuard'],
    ['stack', 'Python · C/C++ · TypeScript'],
    ['sec', "TryHackMe top 4% · Security+ Dec '26"],
    ['study', 'AGH Kraków · CS, year 4 · GPA 4.61'],
  ] as [string, string][],
};

export const highlights = [
  { title: '2× hackathon winner', text: 'Hacknarök 2026 · Polskie Porty 2030+' },
  { title: "Rector's Grant AGH 2026", text: 'LPMT optical transceiver, 20 people' },
  { title: 'Analog astronaut', text: 'CHRONOS-94 lunar habitat mission' },
  { title: 'Top 4% TryHackMe', text: 'global ranking' },
];

export const projects: Project[] = [
  {
    meta: 'AeroCue · Founder, CEO & CTO · 2025–',
    title: 'Paperless aviation, EU-compliant',
    text: 'SaaS replacing paper flight logs, pilot logbooks and aircraft technical records with one system — 7 modules covering Part-FCL, Part-CAMO, Part-145 and ORO.FTL. Auto flight detection from phone GPS, hard-landing detection, tamper-evident HMAC audit log.',
    tags: ['FastAPI', 'PostgreSQL · TimescaleDB · PostGIS', 'Redis Streams', 'Next.js'],
  },
  {
    meta: 'SentiGuard Systems · Co-founder & CTO · 2025–',
    title: 'Multi-sensor drone detection',
    text: 'Technical architecture from prototype onward. DetectorRemoteID: Remote-ID sniffing over Wi-Fi and Bluetooth, a RISC-V coprocessor for time-critical sampling and an on-device TinyML model estimating distance from RSSI.',
    tags: ['C/C++', 'nRF7002 · nRF54L15', 'TinyML'],
  },
  {
    meta: '1st place · Polskie Porty 2030+ · Sopot 2026',
    title: 'DockWise — port intelligence',
    text: 'Built for the Port of Gdynia: automated intake of vessel nominations, LLM agents enriching the data, risk scoring and berth allocation. Now heading towards a product at MAG.',
    tags: ['React', 'FastAPI', 'PostGIS', 'LLM agents'],
    highlight: true,
  },
  {
    meta: 'AGH SkyLink · Czech Rocket Challenge 2026',
    title: 'Rocket ground station & ISS voice link',
    text: 'CRC Mission Control: real-time binary frame parsing, a GPU-rendered 3D navball and three-tier logging for high-power rockets. Mission Control Panel: full-duplex real-time voice system for ISS contact.',
    tags: ['Python · DearPyGui', 'C++', 'real-time'],
  },
  {
    meta: '1st place · Hacknarök 2026 · AIoT',
    title: '[Hacknarök project name]', // TODO
    text: 'Embedded system in C/C++ on Nordic Semiconductor hardware. [One sentence: what it does and why it won.]', // TODO
    tags: ['C/C++', 'Nordic nRF'],
    highlight: true,
  },
  {
    meta: 'Thesis · 2026',
    title: 'Person re-identification in CCTV',
    text: 'Retrospective search across recordings with deep feature extractors and vector search, built to support the search for missing persons.',
    tags: ['computer vision', 'Milvus'],
  },
];

export const moreProjects =
  'NOTAM Airspace Manager (Neo4j, real-time route conflicts) · LPMT 1.55 µm free-space optical transceiver (STM32 + FPGA) · LLM prompt-attack classifier · TDOA sound localisation · embedded sound player on LPC1768.';

export const jobs: Job[] = [
  {
    when: 'Sep 2026 – now',
    role: 'Backend & Database Engineer',
    org: 'Morska Agencja Gdynia · remote',
    text: 'Own the backend of internal warehouse and freight systems — schema design, APIs, cloud, deployments and infrastructure security.',
  },
  {
    when: 'Feb – Sep 2026',
    role: 'Software Developer Intern (QA)',
    org: 'IBM',
    text: 'Test design and automation in Python for a flagship enterprise system; root-cause analysis with development teams.',
  },
  {
    when: 'Dec 2024 – now',
    role: 'Cybersecurity Specialist · previously Lead Software Developer & Vice President',
    org: 'AGH SkyLink',
    text: "Led the software team and co-shaped the organisation's strategy as a board member; now responsible for the security of its systems.",
  },
  {
    when: '2023 – now',
    role: 'BSc Applied Computer Science',
    org: 'AGH University of Kraków',
    text: 'Year 4, GPA 4.61, annual merit scholarships; working with the Faculty of Space Technologies.',
  },
];

export const space: SpaceItem[] = [
  { when: 'Apr – May 2025', title: 'Analog astronaut, CHRONOS-94', text: 'International mission in a simulated lunar habitat; results presented at a scientific symposium.' },
  { when: 'Aug 2026 · Carlow, Ireland', title: 'Space Industry Workshop', text: 'Erasmus+ BIP with SETU, Riga TU and Stockholm University — mission proposal pitched to experts.' },
  { when: 'May 2026 · Luxembourg', title: 'StarTech Summer School', text: 'Space entrepreneurship — venture concept pitched to an international jury.' },
  { when: 'Feb 2026 · Kiruna, Sweden', title: 'Arctic Winter School', text: 'Nanosatellites and stratospheric balloons; Esrange, IRF and EISCAT.' },
];

// Wpisy bez `href` wyświetlają się jako „wkrótce”.
export const posts: Post[] = [
  { title: 'Finding a phishing kit and two webshells on a small-business host', date: 'soon', topic: 'security' },
  { title: 'A tamper-evident audit log with HMAC chains', date: 'soon', topic: 'backend' },
  { title: 'Hardened infrastructure for a startup demo for ~€20 a year', date: 'soon', topic: 'infra' },
];

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#space', label: 'Space' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
];
