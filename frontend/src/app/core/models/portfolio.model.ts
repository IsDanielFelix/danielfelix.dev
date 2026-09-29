export interface Profile {
  name: string;
  role: string;
  headline: string;
  pitch: string;
  summary: string;
  availability: string;
  location: string;
  postalCode: string;
  email: string;
  phone: string;
  phoneHref: string;
  websiteLabel: string;
  websiteHref: string;
  cvPath: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Strength {
  title: string;
  text: string;
}

export interface Skill {
  name: string;
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
  width: number;
}

export interface Project {
  slug: string;
  name: string;
  mark: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: string[];
  url?: string;
  urlLabel?: string;
  here?: boolean;
}

export interface NavItem {
  label: string;
  fragment: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
