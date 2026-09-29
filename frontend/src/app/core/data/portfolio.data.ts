import {
  Education,
  Experience,
  Highlight,
  Language,
  NavItem,
  Profile,
  Project,
  SkillGroup,
  SocialLink,
  Strength,
} from '../models/portfolio.model';

export const PROFILE: Profile = {
  name: 'Daniel Felix',
  role: 'Desarrollador web full stack',
  headline: 'De la base de datos a la interfaz.',
  pitch:
    'Diseño, construyo y despliego aplicaciones web completas. Busco mi primera oportunidad junior.',
  summary:
    'Desarrollador full stack junior con formación en Desarrollo de Aplicaciones Web (DAW). He diseñado, construido y desplegado proyectos web completos de forma autónoma, desde la base de datos hasta la interfaz final, incluyendo mi propio portfolio profesional con dominio personalizado.',
  availability: 'Abierto a primera oportunidad junior',
  location: "L'Hospitalet de Llobregat",
  postalCode: '08901',
  email: 'itdanielfelix@gmail.com',
  phone: '722 33 2006',
  phoneHref: 'tel:+34722332006',
  websiteLabel: 'danielfelix.dev',
  websiteHref: 'https://www.danielfelix.dev',
  cvPath: '/cv/Curriculum_DanielFelix.pdf',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', fragment: 'inicio' },
  { label: 'Sobre mí', fragment: 'sobre-mi' },
  { label: 'Stack', fragment: 'stack' },
  { label: 'Proyectos', fragment: 'proyectos' },
  { label: 'Experiencia', fragment: 'experiencia' },
  { label: 'Formación', fragment: 'formacion' },
  { label: 'Contacto', fragment: 'contacto' },
];

export const HIGHLIGHTS: Highlight[] = [
  { value: 'DAW', label: 'Desarrollo de aplicaciones web' },
  { value: '+100', label: 'Usuarios en soporte técnico' },
  { value: 'Full stack', label: 'Angular, Laravel y MySQL' },
];

export const STRENGTHS: Strength[] = [
  {
    title: 'Ciclo completo',
    text: 'No solo maqueto. Llego de la base de datos a la interfaz y dejo el proyecto desplegado.',
  },
  {
    title: 'Ya en producción',
    text: 'Este sitio es danielfelix.dev, con dominio propio y SSL.',
  },
  {
    title: 'Trato con usuarios',
    text: 'En TYAME 360 di soporte presencial y remoto a más de 100 personas.',
  },
];

export const PRIMARY_STACK = [
  'Angular',
  'TypeScript',
  'Tailwind CSS',
  'Laravel',
  'PHP',
  'MySQL',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces con Angular, tipadas y maquetadas con Tailwind.',
    items: [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'APIs y datos con Laravel, PHP y MySQL.',
    items: [{ name: 'Laravel' }, { name: 'PHP' }, { name: 'MySQL' }],
  },
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Diseño, APIs, control de versiones y entrega.',
    items: [
      { name: 'Figma' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'REST APIs' },
      { name: 'CI/CD' },
      { name: 'Docker', note: 'Básico' },
      { name: 'Jasmine / Karma', note: 'Básico' },
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Técnico informático',
    company: 'TYAME 360, S.L.',
    period: 'Junio 2023 – Diciembre 2023',
    bullets: [
      'Soporte presencial y remoto a más de 100 usuarios.',
      'Registro y seguimiento de incidencias técnicas.',
      'Gestión de usuarios, permisos y credenciales.',
      'Configuración de equipos Windows y periféricos.',
      'Control de inventario y asignación de equipos.',
      'Resolución de incidencias de hardware, software, Wi-Fi y VPN.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    title: 'Desarrollo de Aplicaciones Web, DAW',
    institution: 'INS Provençana',
    period: '2024 – 2026',
  },
  {
    title: 'Sistemas Microinformáticos y Redes, SMR',
    institution: 'INS Provençana',
    period: '2022 – 2024',
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Español', level: 'C2 · Nativo', width: 100 },
  { name: 'Catalán', level: 'C2 · Nativo', width: 100 },
  { name: 'Inglés', level: 'B1', width: 46 },
];

export const PROJECTS: Project[] = [
  {
    slug: 'portiq',
    name: 'PortIQ',
    mark: 'PI',
    kind: 'Proyecto final DAW',
    summary:
      'Rastreador de inversiones tipo Google Finance con dashboard, gráficos de rendimiento y comparador de carteras públicas.',
    highlights: [
      'Frontend en Angular y TypeScript, maquetado con Tailwind CSS.',
      'Backend en Laravel con Supabase.',
      'Microservicio en Python (FastAPI) para datos financieros con yfinance.',
    ],
    stack: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'Laravel',
      'Supabase',
      'FastAPI',
      'Python',
    ],
  },
  {
    slug: 'portfolio',
    name: 'danielfelix.dev',
    mark: 'DF',
    kind: 'Este sitio',
    summary:
      'Portfolio personal para presentar perfil y proyectos a empresas. Angular y Tailwind CSS, dominio propio y SSL.',
    highlights: [
      'Angular, TypeScript y Tailwind CSS.',
      'Dominio propio danielfelix.dev.',
      'Certificado SSL.',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    here: true,
  },
];

export const SOCIALS: SocialLink[] = [
  // { label: 'GitHub', href: 'https://github.com/tu-usuario' },
  // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tu-perfil' },
];
