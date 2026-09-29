import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeadingComponent],
  templateUrl: './contact-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  private readonly portfolio = inject(PortfolioService);
  private readonly formBuilder = inject(FormBuilder);
  private copyTimer?: ReturnType<typeof setTimeout>;

  protected readonly profile = this.portfolio.profile;
  protected readonly copied = signal(false);
  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
  protected submitted = false;

  protected invalid(controlName: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${this.profile.email}`;
    }
  }

  protected send(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Portfolio · ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
  }
}
