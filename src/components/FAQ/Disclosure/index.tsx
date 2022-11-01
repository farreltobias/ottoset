import { Children } from 'react';

import { Answer } from './Answer';
import { Icon } from './Icon';
import { Question } from './Question';

import { Disclosure as Menu } from '@headlessui/react';

type ChildrenType =
  | React.ReactElement<typeof Question>
  | React.ReactElement<typeof Answer>;

type SubComponents = {
  Question: typeof Question;
  Answer: typeof Answer;
};

type Props = {
  className?: string;
  children: ChildrenType | ChildrenType[];
};

const Disclosure: React.FC<Props> & SubComponents = ({ children }) => {
  const keys = Object.keys(Disclosure) as (keyof typeof Disclosure)[];

  const Components = keys.reduce(
    (acc, key) => [
      ...acc,
      ...Children.map(children, (child) => {
        if (child?.type === Disclosure[key]) return child;
      }),
    ],
    [] as React.ReactElement[],
  );

  const Question = Components.find((node) => {
    return node?.type === Disclosure.Question;
  });

  const Answer = Components.find((node) => {
    return node?.type === Disclosure.Answer;
  });

  return (
    <Menu as="li" className="border border-secondary-400 rounded-lg p-8 mb-6">
      <Menu.Button className="flex items-center justify-between w-full outline-none">
        {Question}
        <Icon />
      </Menu.Button>
      <Menu.Panel className="pt-4">{Answer}</Menu.Panel>
    </Menu>
  );
};

Disclosure.Question = Question;
Disclosure.Answer = Answer;

export { Disclosure };
