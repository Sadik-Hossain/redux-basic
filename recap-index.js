//* state  - count:0
//* action - increment, decrement, reset
//* reducer(logic)
//* store (storing state)
const { createStore } = require("redux");

//* constant action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//*--------- defining initial state --------
const InitialState = {
  count: 0,
};

//*-------- defining action ------------
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const reset = () => {
  return {
    type: RESET,
  };
};

//* -------------------- creating reducer -------------------
//? reducer 2 ti jinis accept kore(state,action)
const counterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};
//* ------------------- store e reducer pass -----------------
/**
 * getState()
 * dispatch()
 * subscribe()
 */
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(reset());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
