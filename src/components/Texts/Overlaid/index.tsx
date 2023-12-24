import { Title as MainTitle } from '../titles';

import { SubTitle } from './SubTitle';
import { Title } from './Title';

export type SubComponents = {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
};

type Props = React.PropsWithChildren<{
  as?: React.ElementType;
  className?: string;
  center?: boolean;
}>;

const Overlaid: React.FC<Props> & SubComponents = ({
  as = 'h1',
  children,
  className = '',
  center = false,
}) => (
  <MainTitle
    as={as}
    variant="h3"
    smallVariant="h2"
    largeVariant="display2"
    className={className}
    center={center}
  >
    {children}
  </MainTitle>
);

Overlaid.Title = Title;
Overlaid.SubTitle = SubTitle;

export { Overlaid };
