import Image from 'next/image';

import happy from '@public/photos/happy.webp';
import workers from '@public/photos/office-workers.webp';

import { List } from '@components/List';

type Props = {
  services: string[];
};

export const MoreServices: React.FC<Props> = ({ services }) => {
  return (
    <section className="mt-14 lg:mt-28">
      <List>
        <List.Images>
          <Image
            src={workers}
            alt="Office workers"
            placeholder="blur"
            className="w-full h-auto drop-shadow-xl"
            sizes="100vw"
          />
          <Image
            src={happy}
            alt="Happy worker"
            placeholder="blur"
            className="absolute w-1/2 top-0 left-0 -translate-x-1/8 -translate-y-1/5 drop-shadow-xl"
          />
        </List.Images>
        <List.Content items={services}>Mais de nossos serviços</List.Content>
      </List>
    </section>
  );
};
