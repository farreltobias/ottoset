import { classNames } from '@utils/classNames';
import { ChildrenType, getSubComponents } from '@utils/getSubComponents';

import { Content } from './Content';
import { Images } from './Images';

type SubComponents = {
  Content: typeof Content;
  Images: typeof Images;
};

type Props = {
  children: ChildrenType<SubComponents> | ChildrenType<SubComponents>[];
  className?: string;
};

export const List: React.FC<Props> & SubComponents = ({
  children,
  className = '',
}) => {
  const { Content, Images } = getSubComponents({
    children,
    FC: List,
  });

  return (
    <div
      className={classNames(
        'container mx-auto flex flex-col lg:flex-row',
        className,
      )}
    >
      {Content.component}
      {Images.component}
    </div>
  );
};

List.Content = Content;
List.Images = Images;
