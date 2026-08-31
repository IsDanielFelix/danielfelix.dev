import { Component, OnInit, signal } from '@angular/core';

const THEMES = ['dark', 'light'] as const;
const ACCENTS = ['orange', 'red', 'blue', 'violet', 'green'] as const;

type Theme = (typeof THEMES)[number];
type Accent = (typeof ACCENTS)[number];

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('frontend');

  readonly themes = THEMES;
  readonly accents = ACCENTS;

  theme: Theme = 'dark';
  accent: Accent = 'orange';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedAccent = localStorage.getItem('portfolio-accent');

    if (this.isTheme(savedTheme)) {
      this.theme = savedTheme;
    }

    if (this.isAccent(savedAccent)) {
      this.accent = savedAccent;
    }

    this.applyPreferences();
  }

  setTheme(theme: Theme): void {
    this.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    this.applyPreferences();
  }

  setAccent(accent: Accent): void {
    this.accent = accent;
    localStorage.setItem('portfolio-accent', accent);
    this.applyPreferences();
  }

  private applyPreferences(): void {
    const root = document.documentElement;

    root.dataset['theme'] = this.theme;
    root.dataset['accent'] = this.accent;
  }

  private isTheme(value: string | null): value is Theme {
    return value !== null && THEMES.includes(value as Theme);
  }

  private isAccent(value: string | null): value is Accent {
    return value !== null && ACCENTS.includes(value as Accent);
  }
}

