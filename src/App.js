import { Fragment } from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <Fragment>
      <header>
        <h1>Simple Redux Counter</h1>
      </header>
      <Counter />
    </Fragment>
  );
}

export default App;
