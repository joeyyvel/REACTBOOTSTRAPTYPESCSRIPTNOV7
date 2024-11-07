import { ReactNode } from "react";

interface MyListProps<T> {
  items: T[];
  render: (items: T) => ReactNode;
}

export const MyList = <T,>({ items, render }: MyListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};
