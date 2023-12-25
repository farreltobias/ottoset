import { Children } from 'react';

import type { Content } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

type Props = {
  information: Content.CareerDocumentDataRequirementsItem[];
  title: string;
};

export const List: React.FC<Props> = ({ information, title }) => {
  return (
    <section>
      <h1>
        <b>{title}:</b>
      </h1>
      <ul>
        {Children.toArray(
          information.map(({ item }) => (
            <li>
              - <PrismicRichText field={item} />
            </li>
          )),
        )}
      </ul>
    </section>
  );
};
