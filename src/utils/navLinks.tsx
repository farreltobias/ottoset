type SubItem = {
  href: string;
  label: string;
  onlyFooter?: boolean;
  onlyHeader?: boolean;
};

type NavLink = {
  label: string;
  href?: string;
  subItems?: SubItem[];
  onlyFooter?: boolean;
  onlyHeader?: boolean;
};

export const navLinks: NavLink[] = [
  {
    href: '/sobre',
    label: 'Sobre',
    onlyHeader: true,
  },
  {
    label: 'A Ottoset',
    onlyFooter: true,
    subItems: [
      {
        href: '/sobre',
        label: 'Quem somos',
      },
      {
        href: '/servicos',
        label: 'Serviços',
      },
      {
        href: '/projetos',
        label: 'Portfolio de projetos',
      },
      {
        href: '/prestador',
        label: 'Seja prestador de serviços Ottoset',
      },
      {
        href: '/carreiras',
        label: 'Trabalhe conosco',
      },
    ],
  },
  {
    label: 'Grupo Gerador',
    subItems: [
      {
        href: '/',
        label: 'Venda',
      },
      {
        href: '/',
        label: 'Locação',
      },
      {
        href: '/',
        label: 'Instalação',
      },
      {
        href: '/',
        label: 'Manutenção',
      },
      {
        href: '/',
        label: 'Automação',
      },
      {
        href: '/',
        label: 'Monitoramento remoto',
      },
    ],
  },
  {
    label: 'Aviação',
    subItems: [
      {
        href: '/',
        label: 'Modernização de GPU',
      },
    ],
  },
  {
    label: 'Energia Solar',
    subItems: [
      {
        href: '/',
        label: 'Venda',
      },
      {
        href: '/',
        label: 'Instalação',
      },
      {
        href: '/',
        label: 'Manutenção',
      },
      {
        href: '/',
        label: 'Simule seu sistema',
        onlyFooter: true,
      },
    ],
  },
  {
    label: 'Manutenção Predial',
    subItems: [
      {
        href: '/',
        label: 'Elétrica',
      },
      {
        href: '/',
        label: 'Civil',
      },
      {
        href: '/',
        label: 'Hidráulica',
      },
    ],
  },
];
