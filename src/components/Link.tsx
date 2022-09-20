type Props = React.PropsWithChildren<React.ComponentPropsWithoutRef<'a'>>;

export const Link: React.FC<Props> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <a
      className={`flex font-bold m-2 text-neutral cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
