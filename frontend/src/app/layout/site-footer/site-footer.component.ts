import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  private readonly portfolio = inject(PortfolioService);
  protected readonly profile = this.portfolio.profile;
  protected readonly navigation = this.portfolio.navigation;
  protected readonly socials = this.portfolio.socials;
  protected readonly year = new Date().getFullYear();
}
