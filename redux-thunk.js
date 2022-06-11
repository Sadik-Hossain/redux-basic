// async action - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

//* action cnst
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

//* api const
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// *----------------- states ----------------------
const initTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

//* ------------------ actions ----------------
const getTodosReq = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodosErr = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};
//* -------------------- reducers ---------------------
const todosReducer = (state = initTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };

    default:
      return state;
  }
};
//* async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosReq());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        console.log(titles);
        dispatch(getTodosSuccess(titles));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(getTodosErr(errMsg));
      });
  };
};
//* ----------------- store ----------------------------
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
