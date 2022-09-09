type Props = React.PropsWithChildren<React.ComponentPropsWithoutRef<'a'>>;

export const Link: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <a
      className={`flex font-bold p-2 text-neutral ${className || ''}`}
      {...props}
    >
      {children}
    </a>
  );
};
