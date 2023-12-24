import { BreadCrumbJsonLdProps } from 'next-seo';

import { slugToTitle } from './slugToTitle';

const defaultCustomNames: Record<string, string> = {
  projetos: 'Nossos Projetos',
  servicos: 'Nossos Serviços',
  prestador: 'Seja um Prestador',
  faq: 'Perguntas Frequentes',
};

type Params = {
  siteURL: string;
  path: string;
  customNames?: Record<string, string>;
};

export const getBreadcrumbs = ({
  siteURL,
  path,
  customNames,
}: Params): BreadCrumbJsonLdProps['itemListElements'] => {
  const paths = path.split('/').filter(Boolean);
  const breadcrumbs = paths.map((path, index) => ({
    position: index + 1,
    name: customNames?.[path] || defaultCustomNames[path] || slugToTitle(path),
    item: `${siteURL}/${paths.slice(0, index + 1).join('/')}`,
  }));
  return breadcrumbs;
};
