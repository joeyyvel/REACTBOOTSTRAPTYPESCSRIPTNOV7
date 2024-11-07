import "./App.css";
import ChildWithHeader from "./ChildWithHeader";

import { Header } from "./Header";

function App() {
  return (
    <>
      <h1>My App!</h1>
      <Header title="hello main menu" />
      <ChildWithHeader title="title on main app">
        Hello Children
      </ChildWithHeader>
    </>
  );
}

export default App;
