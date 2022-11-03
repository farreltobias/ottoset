import { Children } from 'react';

import { ArticleProvider } from '@contexts/ArticleContext';

import { Content } from './Content';
import { Image } from './Image';

type ChildrenType =
  | React.ReactElement<typeof Content>
  | React.ReactElement<typeof Image>;

type SubComponents = {
  Content: typeof Content;
  Image: typeof Image;
};

type Props = {
  className?: string;
  order?: 'left' | 'right';
  children: ChildrenType | ChildrenType[];
  id?: string;
};

const Article: React.FC<Props> & SubComponents = ({
  children,
  className = '',
  order = 'left',
  id,
}) => {
  const keys = Object.keys(Article) as (keyof typeof Article)[];

  const Components = keys.reduce(
    (acc, key) => [
      ...acc,
      ...Children.map(children, (child) => {
        if (child?.type === Article[key]) return child;
      }),
    ],
    [] as React.ReactElement[],
  );

  const Image = Components.find((node) => {
    return node?.type === Article.Image;
  });

  const Content = Components.find((node) => {
    return node?.type === Article.Content;
  });

  return (
    <ArticleProvider order={order}>
      <section
        id={id}
        className={`container mx-auto flex flex-col-reverse lg:flex-row w-full justify-evenly pt-12 ${className}`}
      >
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            order === 'left' ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {Image}
        </div>
        {Content}
      </section>
    </ArticleProvider>
  );
};

Article.Content = Content;
Article.Image = Image;

export { Article, Content };
