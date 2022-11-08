import NextLink from 'next/link';

type Props = {
  href: string;
  label: string;
};

export const SubItem: React.FC<Props> = ({ href, label }) => {
  return (
    <li className="flex items-center">
      <NextLink
        href={href}
        className="my-1 text-neutral-600 font-medium text-sm"
      >
        {label}
      </NextLink>
    </li>
  );
};
