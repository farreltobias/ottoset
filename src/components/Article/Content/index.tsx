import { classNames } from '@utils/classNames';

import { Link } from './Link';
import { SubTitle } from './SubTitle';
import { Text } from './Text';
import { Title } from './Title';

type ChildrenType =
  | React.ReactElement<typeof Title>
  | React.ReactElement<typeof SubTitle>
  | React.ReactElement<typeof Text>
  | React.ReactElement<typeof Link>;

type Props = {
  className?: string;
  children: ChildrenType | ChildrenType[];
};

type SubComponents = {
  Link: typeof Link;
  Text: typeof Text;
  Title: typeof Title;
  SubTitle: typeof SubTitle;
};

const Content: React.FC<Props> & SubComponents = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-center text-center lg:text-start lg:items-start lg:w-1/2',
        className,
      )}
    >
      {children}
    </div>
  );
};

Content.Link = Link;
Content.Text = Text;
Content.Title = Title;
Content.SubTitle = SubTitle;

export { Content };
