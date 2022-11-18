type SubItem = {
  href: string;
  label: string;
  target?: string;
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
        href: '/faq',
        label: 'Perguntas frequentes',
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
        href: '/servicos#grupo-geradores',
        label: 'Venda',
      },
      {
        href: '/servicos#grupo-geradores',
        label: 'Locação',
      },
      {
        href: '/servicos#grupo-geradores',
        label: 'Instalação',
      },
      {
        href: '/servicos#grupo-geradores',
        label: 'Manutenção',
      },
      {
        href: '/servicos#automacao',
        label: 'Automação',
      },
      {
        href: '/servicos#grupo-geradores',
        label: 'Monitoramento remoto',
      },
    ],
  },
  {
    label: 'Aviação',
    subItems: [
      {
        href: '/servicos#aviacao',
        label: 'Modernização de GPU',
      },
    ],
  },
  {
    label: 'Energia Solar',
    subItems: [
      {
        href: '/servicos#fotovoltaica',
        label: 'Venda',
      },
      {
        href: '/servicos#fotovoltaica',
        label: 'Instalação',
      },
      {
        href: '/servicos#fotovoltaica',
        label: 'Manutenção',
      },
      {
        href: 'https://solar.ottoset.com.br/',
        target: '_blank',
        label: 'Simule seu sistema',
        onlyFooter: true,
      },
    ],
  },
  {
    label: 'Soluções prediais',
    subItems: [
      {
        href: '/servicos#manutencao',
        label: 'Elétrica',
      },
      {
        href: '/servicos#manutencao',
        label: 'Civil',
      },
      {
        href: '/servicos#manutencao',
        label: 'Hidráulica',
      },
    ],
  },
];
