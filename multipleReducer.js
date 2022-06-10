//* productReducer

const { createStore, combineReducers } = require("redux");

// products constants
const GET_PD = "GET_PD";
const ADD_PD = "ADD_PD";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";
//* initial pd state
const initialPdState = {
  products: ["sugar", "salt"],
  numberOfPd: 2,
};
//* pd action
const getPd = () => {
  return {
    type: GET_PD,
  };
};
const addPd = (pd) => {
  return {
    type: ADD_PD,
    payload: pd,
  };
};

//* reducer of products
const productReducer = (state = initialPdState, action) => {
  switch (action.type) {
    case GET_PD:
      return {
        ...state,
      };
    case ADD_PD:
      return {
        products: [...state.products, action.payload],
        numberOfPd: state.numberOfPd + 1,
      };

    default:
      return state;
  }
};

//* cart
// * initial cart
const initialCartState = {
  cart: ["sugar"],
  numberOfPd: 1,
};
//* cart action
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (pd) => {
  return {
    type: ADD_CART_ITEMS,
    payload: pd,
  };
};

//* reducer of products
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        cart: [...state.cart, action.payload],
        numberOfPd: state.numberOfPd + 1,
      };

    default:
      return state;
  }
};

//* store
// ** store e 1ta matro reducer rakha jay
//* multiple reducer newar jonno redux e combineReducer ke import krte hbe
//* combineReducer 1 ta object store kre,

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getPd());
store.dispatch(addPd("soap"));
store.dispatch(addPd("rice"));

store.dispatch(getCart());
store.dispatch(addCart("soda"));
store.dispatch(addCart("coke"));
