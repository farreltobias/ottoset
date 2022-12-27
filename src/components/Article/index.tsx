import { classNames } from '@utils/classNames';
import { ChildrenType, getSubComponents } from '@utils/getSubComponents';

import { Content } from './Content';
import { Image } from './Image';

type SubComponents = {
  Content: typeof Content;
  Image: typeof Image;
};

type Props = {
  as?: React.ElementType;
  className?: string;
  children: ChildrenType<SubComponents> | ChildrenType<SubComponents>[];
  id?: string;
};

const Article: React.FC<Props> & SubComponents = ({
  as = 'section',
  children,
  className = '',
  id,
}) => {
  const { Content, Image } = getSubComponents<SubComponents>({
    children,
    FC: Article,
  });

  const Component = as;

  return (
    <Component
      id={id}
      className={classNames(
        'container mx-auto flex flex-col lg:flex-row w-full justify-evenly gap-x-20',
        className,
      )}
    >
      {Content.component}
      <div className="flex items-center justify-center w-full lg:w-1/2">
        {Image.component}
      </div>
    </Component>
  );
};

Article.Content = Content;
Article.Image = Image;

export { Article, Content };
