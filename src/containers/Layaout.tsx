interface LayaoutProps {
  children: React.ReactNode;
}

const Layaout = ({ children }: LayaoutProps) => {
  return <div className="flex flex-row items-center">{children}</div>;
};

export default Layaout;
