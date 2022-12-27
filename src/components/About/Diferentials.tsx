import workers from '@public/photos/diferentials-workers.webp';
import monitor from '@public/photos/double-monitor.webp';

import { BlurImage } from '@components/BlurImage';
import { List } from '@components/List';

type Props = {
  diferentials: string[];
};

export const Diferentials: React.FC<Props> = ({ diferentials }) => {
  return (
    <section className="mt-12 lg:mt-24">
      <List className="">
        <List.Content items={diferentials} className="lg:w-3/5 gap-20">
          Nossos diferenciais
        </List.Content>
        <List.Images className="relative w-5/6 mx-auto">
          <BlurImage
            src={workers}
            alt="Office workers"
            placeholder="blur"
            className="w-full h-auto"
            sizes="100vw"
          />
          <BlurImage
            src={monitor}
            alt="Concentrated worker"
            placeholder="blur"
            className="absolute w-1/2 top-0 right-0 translate-x-1/5 -translate-y-1/5"
          />
        </List.Images>
      </List>
    </section>
  );
};
