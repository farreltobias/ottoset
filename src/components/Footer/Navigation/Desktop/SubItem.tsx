import NextLink from 'next/link';

type Props = {
  href: string;
  label: string;
  target?: string;
};

export const SubItem: React.FC<Props> = ({ href, label, target }) => {
  return (
    <NextLink
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="text-neutral-600 font-medium text-xs xl:text-sm mb-2 w-fit"
    >
      {label}
    </NextLink>
  );
};
