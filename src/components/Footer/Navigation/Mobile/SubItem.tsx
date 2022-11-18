import NextLink from 'next/link';

type Props = {
  href: string;
  label: string;
  target?: string;
};

export const SubItem: React.FC<Props> = ({ href, label, target }) => {
  return (
    <li className="flex items-center">
      <NextLink
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="my-1 text-neutral-600 font-medium text-sm"
      >
        {label}
      </NextLink>
    </li>
  );
};
