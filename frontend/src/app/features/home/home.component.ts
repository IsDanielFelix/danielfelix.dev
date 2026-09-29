import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AboutSectionComponent } from './sections/about-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';
import { EducationSectionComponent } from './sections/education-section.component';
import { ExperienceSectionComponent } from './sections/experience-section.component';
import { HeroSectionComponent } from './sections/hero-section.component';
import { ProjectsSectionComponent } from './sections/projects-section.component';
import { StackSectionComponent } from './sections/stack-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    StackSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor() {
    inject(Title).setTitle('Daniel Felix · Desarrollador web');
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Portfolio de Daniel Felix, desarrollador full stack junior en L’Hospitalet. Angular, TypeScript, Tailwind, Laravel y MySQL.',
    });
  }
}
