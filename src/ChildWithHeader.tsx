import { ReactNode } from "react";

type MyChildWithHeaderProps = {
  children: ReactNode;
  title: string;
};

const ChildWithHeader = ({
  title = "what is going on",
  children,
}: MyChildWithHeaderProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2 style={{ backgroundColor: "red" }}>{children}</h2>
    </div>
  );
};

export default ChildWithHeader;
