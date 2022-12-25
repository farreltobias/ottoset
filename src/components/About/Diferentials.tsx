import Image from 'next/image';

import workers from '@public/photos/diferentials-workers.webp';
import monitor from '@public/photos/double-monitor.webp';

import { List } from '@components/List';

type Props = {
  diferentials: string[];
};

export const Diferentials: React.FC<Props> = ({ diferentials }) => {
  return (
    <section className="mt-12 lg:mt-28">
      <List>
        <List.Content items={diferentials}>Nossos diferenciais</List.Content>
        <List.Images>
          <Image
            src={workers}
            alt="Office workers"
            placeholder="blur"
            className="w-full h-auto"
            sizes="100vw"
          />
          <Image
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
