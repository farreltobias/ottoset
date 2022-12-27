import happy from '@public/photos/happy.webp';
import workers from '@public/photos/office-workers.webp';

import { BlurImage } from '@components/BlurImage';
import { List } from '@components/List';

type Props = {
  services: string[];
};

export const MoreServices: React.FC<Props> = ({ services }) => {
  return (
    <section className="mt-14 lg:mt-24">
      <List>
        <List.Content
          items={services}
          className="lg:order-last lg:w-3/5 gap-20"
        >
          Mais de nossos serviços
        </List.Content>
        <List.Images className="relative w-5/6 mx-auto">
          <BlurImage
            src={workers}
            alt="Office workers"
            placeholder="blur"
            className="w-full h-auto drop-shadow-xl"
            sizes="100vw"
          />
          <BlurImage
            src={happy}
            alt="Happy worker"
            placeholder="blur"
            className="absolute w-1/2 top-0 left-0 -translate-x-1/8 -translate-y-1/5 drop-shadow-xl"
          />
        </List.Images>
      </List>
    </section>
  );
};
