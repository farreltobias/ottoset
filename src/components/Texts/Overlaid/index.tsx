import { Title as MainTitle } from '../titles';

import { SubTitle } from './SubTitle';
import { Title } from './Title';

type SubComponents = {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
};

type Props = React.PropsWithChildren<{
  className?: string;
  center?: boolean;
}>;

const Overlaid: React.FC<Props> & SubComponents = ({
  children,
  className = '',
  center = false,
}) => (
  <MainTitle
    as="h1"
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
