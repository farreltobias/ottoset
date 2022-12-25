import Image from 'next/image';

import eletronic from '@public/photos/eletronic.webp';
import mechanic from '@public/photos/mechanic.webp';
import office from '@public/photos/office.webp';
import streetview from '@public/photos/streetview.webp';

export const CompanyImages: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center lg:justify-end w-full lg:w-2/5 child:drop-shadow-xl">
      <div className="relative w-5/6 lg:w-full child:drop-shadow-xl">
        <Image
          src={office}
          alt="office"
          placeholder="blur"
          className="w-full h-auto"
        />
        <Image
          src={streetview}
          alt="streetview"
          placeholder="blur"
          className="absolute w-2/5 top-0 left-0 -translate-x-1/3 -translate-y-1/3"
        />
        <Image
          src={eletronic}
          alt="eletronic"
          placeholder="blur"
          className="absolute w-2/5 top-0 right-0 -translate-x-1/5 -translate-y-1/3 lg:-translate-y-3/4"
        />
        <Image
          src={mechanic}
          alt="mechanic"
          placeholder="blur"
          className="absolute w-2/5 bottom-0 right-0 translate-x-1/3 translate-y-1/3"
        />
      </div>
    </div>
  );
};
