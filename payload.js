const { createStore } = require("redux");

//* action type const
const INC = "INC";
const INCBYVALUE = "INCBYVALUE";
const DEC = "DEC";
const ADD_USER = "ADD_USER";
const ADD_USER_COUNTER = "ADD_USER_COUNTER";

//* initial state
const initialState = {
  count: 0,
  users: ["anis"],
};

//* defining action
const inc = () => {
  return {
    type: INC,
  };
};

const incByValue = (value) => {
  return {
    type: INCBYVALUE,
    payload: value,
  };
};
const dec = () => {
  return {
    type: DEC,
  };
};
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
const addUserCounter = (user = "", value = 0) => {
  return {
    type: ADD_USER_COUNTER,
    payload: [user, value],
  };
};

//* reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DEC:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ADD_USER_COUNTER:
      return {
        count: state.count + action.payload[1],
        users: [...state.users, action.payload[0]],
      };
    default:
      state;
  }
};

//* store e pass krbo reducer ke
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incByValue(5));
store.dispatch(incByValue(50));
// store.dispatch(addUser("tom"));
// store.dispatch(addUser("kim"));

store.dispatch(addUserCounter("sadik", 5));
store.dispatch(addUserCounter("tommy", 1));
