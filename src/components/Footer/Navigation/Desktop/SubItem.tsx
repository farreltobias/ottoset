import NextLink from 'next/link';

type Props = {
  href: string;
  label: string;
};

export const SubItem: React.FC<Props> = ({ href, label }) => {
  return (
    <NextLink href={href}>
      <a className="text-neutral-600 font-medium text-xs xl:text-sm mb-2 w-fit">
        {label}
      </a>
    </NextLink>
  );
};
