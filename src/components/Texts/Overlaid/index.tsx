import { Title as MainTitle } from '../titles';

import { Title } from './Title';
import { SubTitle } from './SubTitle';

type SubComponets = {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
};

type Props = React.PropsWithChildren<{
  className?: string;
}>;

const Overlaid: React.FC<Props> & SubComponets = ({
  children,
  className = '',
}) => (
  <MainTitle
    as="h1"
    variant="h3"
    className={`sm:text-5xl sm:leading-120 lg:text-8xl lg:font-extrabold ${className}`}
  >
    {children}
  </MainTitle>
);

Overlaid.Title = Title;
Overlaid.SubTitle = SubTitle;

export { Overlaid };
