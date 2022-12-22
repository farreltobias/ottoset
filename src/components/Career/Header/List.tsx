import { Children } from 'react';

import { PrismicRichText } from '@prismicio/react';

import {
  CareerDocumentDataRequirementsItem,
  Simplify,
} from '.slicemachine/prismicio';

type Props = {
  information: Simplify<CareerDocumentDataRequirementsItem>[];
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
