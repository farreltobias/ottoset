import Link from 'next/link';

type Props = {
  className?: string;
  href: string;
  label: string;
};

export const SubItem: React.FC<Props> = ({ href, label, className = '' }) => {
  return (
    <li className={`flex items-center ${className}`}>
      <Link href={href}>
        <a className="text-lg py-[1.625rem] px-4 font-semibold w-full text-neutral">
          {label}
        </a>
      </Link>
    </li>
  );
};
