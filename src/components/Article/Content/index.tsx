import { useContext } from 'react';

import { ArticleContext } from '@contexts/ArticleContext';

import { Button } from './Button';
import { SubTitle } from './SubTitle';
import { Text } from './Text';
import { Title } from './Title';

type ChildrenType =
  | React.ReactElement<typeof Title>
  | React.ReactElement<typeof SubTitle>
  | React.ReactElement<typeof Text>
  | React.ReactElement<typeof Button>;

type Props = {
  className?: string;
  children: ChildrenType | ChildrenType[];
};

type SubComponents = {
  Button: typeof Button;
  Text: typeof Text;
  Title: typeof Title;
  SubTitle: typeof SubTitle;
};

const Content: React.FC<Props> & SubComponents = ({
  children,
  className = '',
}) => {
  const { order } = useContext(ArticleContext);

  return (
    <div
      className={`flex flex-col justify-center items-center text-center lg:text-start lg:items-start lg:w-1/2 ${
        order === 'left' ? 'lg:order-2 lg:pl-20' : 'lg:order-1 lg:pr-20'
      } ${className}`}
    >
      {children}
    </div>
  );
};

Content.Button = Button;
Content.Text = Text;
Content.Title = Title;
Content.SubTitle = SubTitle;

export { Content };
