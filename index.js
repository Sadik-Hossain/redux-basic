const { createStore } = require("redux");

// -------------  state -------------------
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  users: [{ name: "max" }],
};

// ---------- action -> Object -> type,payload -----------------

//* defining variable
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
//  Increment counter
const incrementCounter = () => {
  return {
    type: INCREMENT, //* variable akare boshate pari
  };
};
//  Decrement counter
const decrementCounter = () => {
  return {
    type: DECREMENT, //* variable akare boshate pari
  };
};
//  add user
const addUser = () => {
  return {
    type: ADD_USER,
    // * data payload theke pass hobe
    payload: {
      name: "sadik",
    },
  };
};

/*
 * jkhn keu increment button e click krbe, ei action call hobe
 * tarpor ei action reducer ke bolbe, je increment koro
 */

//* 1) state
//* 2) define action for dispatch/function call
//* 3) action er type er upor base kore reducer kaj korbe
//* 4) store

//----------- reducer (logic) ----------------------
//* action type er upor base kore logic
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        //* multiple state thakle spread krbo
        ...state,
        //* shudhu count ke update krbo
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state; //* definetely kisu return krbo
  }
};

// store (updated state store rakha )
//* import krbo (upore kora ase)
//* store er 3ti method ase
/**
 * getState()
 *  dispatch()
 * subscribe()
 */

//* create store reducer ke pass kore dilam
const store = createStore(counterReducer);

//* subscribe method store er updated state dekhabe
store.subscribe(() => {
  console.log(store.getState());
});
//* dispatch method =  action ke call kora
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
