import { Component, OnInit } from '@angular/core';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  theme: Theme = 'dark';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.theme = savedTheme;
    }

    this.applyTheme();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('portfolio-theme', this.theme);

    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.dataset['theme'] = this.theme;
  }
}