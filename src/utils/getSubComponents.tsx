import { Children } from 'react';

export type ChildrenType<T extends Record<string, React.FC<any>>> =
  React.ReactElement<T[keyof T]>;

type Props<SubComponents extends Record<string, React.FC<any>>> = {
  children: ChildrenType<SubComponents> | ChildrenType<SubComponents>[];
  FC: React.FC<any> & SubComponents;
};

type SubsOrdered<Sub extends Record<string, React.FC<any>>> = {
  position: number;
  component: ChildrenType<Sub>;
};

export const getSubComponents = <Sub extends Record<string, React.FC<any>>>({
  children,
  FC,
}: Props<Sub>) => {
  const keys = Object.keys(FC) as (keyof typeof FC)[];

  const Components = keys
    .reduce(
      (acc, key) => [
        ...acc,
        ...Children.map(children, (child) => {
          if (child?.type === FC[key]) return child;
        }),
      ],
      [] as ChildrenType<Sub>[],
    )
    .sort((a, b) => Number(a.key) - Number(b.key));

  return Components.reduce((acc, child, index) => {
    const key = keys.find((key) => child?.type === FC[key]);

    if (!key) return acc;

    return {
      ...acc,
      [key]: {
        position: index,
        component: child,
      },
    };
  }, {} as Record<keyof Sub, SubsOrdered<Sub>>);
};
