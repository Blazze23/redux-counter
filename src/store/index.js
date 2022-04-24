import { createStore } from "redux";

const initialState = { counter: 0, isVisible: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        isVisible: state.isVisible,
      };
    case "increase":
      return {
        counter: state.counter + action.amount,
        isVisible: state.isVisible,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        isVisible: state.isVisible,
      };
    case "decrease":
      return {
        counter: state.counter - action.amount,
        isVisible: state.isVisible,
      };
    case "toggle":
      return {
        counter: state.counter,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
