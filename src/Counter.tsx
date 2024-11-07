import { ReactNode } from "react";
type MyCounterProps = {
  children: ReactNode;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const Counter = ({ children, setCounter }: MyCounterProps) => {
  return (
    <div>
      <h1>{children}</h1>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => setCounter((c) => c + 1)}
      >
        +
      </button>
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => setCounter((x) => x + 1)}
      >
        -
      </button>
    </div>
  );
};
