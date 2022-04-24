import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.isVisible);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const decreaseHandler = () => {
    dispatch({ type: "decrease", amount: 5 });
  };

  const toggleCounter = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      {showCounter && <h3>{counter}</h3>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
      </div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>Decrease by 5</button>
      </div>
      <button className={classes.toggle} onClick={toggleCounter}>
        Show Counter
      </button>
    </main>
  );
};

export default Counter;
