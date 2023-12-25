import { SliceZone } from '@prismicio/react';

import { components } from '../../slices';

import { SliceSimulator } from '@slicemachine/adapter-next/simulator';

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone slices={slices} components={components} />
      )}
      className="full grid place-items-center child:w-full"
    />
  );
};

export default SliceSimulatorPage;
