import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  const service = new PortfolioService();

  it('devuelve PortIQ por slug', () => {
    expect(service.getProject('portiq')?.name).toBe('PortIQ');
  });

  it('no inventa un proyecto inexistente', () => {
    expect(service.getProject('no-existe')).toBeUndefined();
  });

  it('mantiene slugs únicos', () => {
    const slugs = service.projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
