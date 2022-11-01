export const Icon: React.FC = () => {
  return (
    <span className="relative w-6 h-8 flex items-center child:h-1 child:w-6 child:transition-all child:duration-200 child:absolute child:rounded-full">
      <span className="ui-not-open:bg-secondary-900 ui-open:bg-primary-500" />
      <span className="ui-not-open:bg-secondary-900 ui-open:bg-primary-500 ui-not-open:rotate-90" />
    </span>
  );
};
