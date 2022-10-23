export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="block text-neutral shadow-neutral-900 text-stroke-[0.5px] lg:text-stroke-1">
      {children}
    </span>
  );
};
