import { useState } from "react";
import "./App.css";
import ChildWithHeader from "./ChildWithHeader";
import { Counter } from "./Counter";
import { Header } from "./Header";
import { MyList } from "./MyList";

function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <h1>My App!</h1>
      <Header title="hello main menu" />
      <ChildWithHeader title="title on main app">
        Hello Children
      </ChildWithHeader>
      <Counter setCounter={setCounter}>the Count is {counter}</Counter>
      <MyList
        items={["😀grinning", "😃smiley", "😁grin"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
