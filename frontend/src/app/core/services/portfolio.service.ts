import { Injectable } from '@angular/core';
import {
  EDUCATION,
  EXPERIENCE,
  HIGHLIGHTS,
  LANGUAGES,
  NAV_ITEMS,
  PRIMARY_STACK,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  SOCIALS,
  STRENGTHS,
} from '../data/portfolio.data';
import { Project } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly profile = PROFILE;
  readonly navigation = NAV_ITEMS;
  readonly highlights = HIGHLIGHTS;
  readonly strengths = STRENGTHS;
  readonly primaryStack = PRIMARY_STACK;
  readonly skillGroups = SKILL_GROUPS;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly languages = LANGUAGES;
  readonly projects = PROJECTS;
  readonly socials = SOCIALS;

  getProject(slug: string): Project | undefined {
    return this.projects.find((project) => project.slug === slug);
  }
}
