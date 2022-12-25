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
};

export const List: React.FC<Props> & SubComponents = ({ children }) => {
  const { Content, Images } = getSubComponents({
    children,
    FC: List,
  });

  const reversed = Content.position > Images.position;

  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-20">
      <div
        className={classNames(
          'flex flex-col lg:w-3/5 gap-y-6',
          reversed ? 'lg:order-2' : '',
        )}
      >
        {Content.component}
      </div>

      <div
        className={classNames(
          'relative flex items-center justify-center mx-auto w-5/6 lg:w-1/2',
          reversed ? 'lg:order-1' : '',
        )}
      >
        {Images.component}
      </div>
    </div>
  );
};

List.Content = Content;
List.Images = Images;
