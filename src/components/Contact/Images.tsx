import React from 'react';

import office from '@public/photos/office-alt.png';

import { BlurImage } from '@components/BlurImage';

export const Images: React.FC = () => {
  return (
    <div className="relative my-32 lg:mt-0 lg:ml-36 lg:w-1/3">
      <div className="w-full shadow-[-32px_32px_0px_-1px_white,-32px_32px_#818181] lg:shadow-[-32px_36px_0px_-1px_white,-32px_36px_#818181]">
        <BlurImage
          src={office}
          alt="office"
          // placeholder="blur"
          className="w-full h-auto object-cover"
          sizes="100vw"
        />
      </div>
      <div className="block absolute w-20 h-20 top-0 right-0 -translate-x-1/2 -translate-y-1/2 lg:translate-x-1/2">
        <div className="relative flex justify-center items-center w-full h-full bg-[url('/photos/contact.png')] bg-[length:200%] bg-[position:50%_25%] rounded-full">
          <div className="block absolute border border-secondary-900 rounded-full w-[calc(100%+5rem)] h-[calc(100%+5rem)]" />
        </div>
      </div>
    </div>
  );
};
