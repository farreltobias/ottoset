import {
  BreadcrumbJsonLd,
  BreadCrumbJsonLdProps,
  FAQPageJsonLd,
  FAQPageJsonLdProps,
} from 'next-seo';

import { asText } from '@prismicio/helpers';

import { getBreadcrumbs } from '@utils/getBreadcrumbs';

import { PerguntasSliceWithCategory } from '@pages/faq';

type Options = {
  title: string;
  description: string;
  path: string;
  siteURL: string;
  customNames?: Record<string, string>;
};

type Props = {
  options: Options;
  items: PerguntasSliceWithCategory['items'];
};

export const JsonLd: React.FC<Props> = ({
  options: { siteURL, path, customNames },
  items,
}) => {
  const breadcrumbsProps: BreadCrumbJsonLdProps = {
    itemListElements: getBreadcrumbs({
      siteURL,
      path,
      customNames,
    }),
  };

  const props: FAQPageJsonLdProps = {
    mainEntity: items.map(({ answer, question }) => ({
      questionName: asText(question),
      acceptedAnswerText: asText(answer),
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd {...breadcrumbsProps} />
      <FAQPageJsonLd {...props} />
    </>
  );
};
