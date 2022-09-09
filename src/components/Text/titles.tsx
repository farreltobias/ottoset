export const Display1: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h1 className="text-display-1 font-extrabold">{children}</h1>
);

export const Display2: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className="text-8xl leading-120 font-extrabold">{children}</h2>
);

export const Display3: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="text-display-3 leading-120 font-extrabold">{children}</h3>
);

export const Display4: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h4 className="text-7xl leading-120 font-extrabold">{children}</h4>
);

export const H1: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h1 className="text-h1 leading-120 font-bold">{children}</h1>
);

export const H2: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className="text-5xl leading-120 font-bold">{children}</h2>
);

export const H3: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="text-h3 leading-125 font-bold">{children}</h3>
);

export const H4: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h4 className="text-2xl leading-120 font-bold">{children}</h4>
);

export const H5: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h5 className="text-xl leading-120 font-bold">{children}</h5>
);

export const H6: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h6 className="text-base leading-120 font-bold">{children}</h6>
);

export const Caps: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="text-base leading-150 uppercase font-bold">{children}</span>
);
