import { ArticleProvider } from '@contexts/ArticleContext';

import { classNames } from '@utils/classNames';
import { ChildrenType, getSubComponents } from '@utils/getSubComponents';

import { Content } from './Content';
import { Image } from './Image';

type SubComponents = {
  Content: typeof Content;
  Image: typeof Image;
};

type Props = {
  className?: string;
  order?: 'left' | 'right';
  children: ChildrenType<SubComponents> | ChildrenType<SubComponents>[];
  id?: string;
};

const Article: React.FC<Props> & SubComponents = ({
  children,
  className = '',
  order = 'left',
  id,
}) => {
  const { Content, Image } = getSubComponents<SubComponents>({
    children,
    FC: Article,
  });

  return (
    <ArticleProvider order={order}>
      <section
        id={id}
        className={classNames(
          'container mx-auto flex flex-col-reverse lg:flex-row w-full justify-evenly',
          className,
        )}
      >
        <div
          className={classNames(
            'flex items-center justify-center w-full lg:w-1/2',
            order === 'left' ? 'lg:order-1' : 'lg:order-2',
          )}
        >
          {Image.component}
        </div>
        {Content.component}
      </section>
    </ArticleProvider>
  );
};

Article.Content = Content;
Article.Image = Image;

export { Article, Content };
