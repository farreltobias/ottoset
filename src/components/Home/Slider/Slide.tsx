import { Children, createRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { useWindowSize } from '@hooks/useWindowSize';

import { Caps, Title } from '@components/Texts';

type Props = {
  title: string | React.ReactNode;
  image: {
    path: StaticImageData;
    name: string;
  };
  description: string[];
};

export const Slide: React.FC<Props> = ({ title, image, description }) => {
  const [titleHeight, setTitleHeight] = useState(0);
  const [height, setHeight] = useState(0);

  const titleRef = createRef<HTMLHeadingElement>();
  const ref = createRef<HTMLHeadingElement>();

  const { width } = useWindowSize();

  useEffect(() => {
    if (!ref.current || !titleRef.current) return;

    const { height } = ref.current.getBoundingClientRect();
    setHeight(height);

    const { height: otherHeight } = titleRef.current.getBoundingClientRect();
    setTitleHeight(otherHeight);
  }, [ref, titleRef, width]);

  return (
    <div className="relative h-full w-full">
      <Image
        src={image.path}
        alt={image.name}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
      <span className="absolute bg-secondary-900 w-full h-full bg-opacity-60" />
      <div className="absolute flex flex-col justify-center items-center h-full w-full">
        <Caps
          ref={titleRef}
          as="h1"
          variant="title"
          className="w-full flex items-center justify-center text-center text-transparent text-3xl sm:text-7xl md:text-8xl children:leading-120"
        >
          <span
            className="shadow-neutral text-stroke-1 lg:text-stroke-2"
            style={{ paddingBottom: height / 2 }}
          >
            {title}
          </span>
          <span
            className="absolute w-full h-full flex items-center justify-center bg-cover bg-center text-center bg-clip-text"
            style={{
              paddingBottom: height / 2,
              backgroundImage: `url(${image.path.src})`,
            }}
          >
            {title}
          </span>
          <span
            className="absolute bg-secondary-900 bg-opacity-60 bg-clip-text"
            style={{ paddingBottom: height / 2 }}
          >
            {title}
          </span>
        </Caps>
        <Title
          ref={ref}
          variant="h6"
          as="span"
          className="container mx-auto absolute flex flex-wrap justify-center items-center text-neutral text-center whitespace-pre sm:text-2xl md:text-3xl lg:leading-125 lg:px-40 xl:px-64"
          style={{ paddingTop: titleHeight / 2 + 24 }}
        >
          {Children.toArray(
            description.map((text) => (
              <span className="pr-2 lg:pr-4">
                {text}
                <span className="text-primary-400">.</span>
              </span>
            ))
          )}
        </Title>
      </div>
    </div>
  );
};
