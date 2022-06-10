const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//* middleware er help e extra kisu feature add krte pari
// * action dispatch ar reducer handle er majha majhi te middleware use hoy
//* api call, login credential

// * ----------- Redux Logger --------------------
//* npm i redux-logger
//* apply middleware import kora
//* store er argumnent e reducer er pase middleware bosabo
//* applymiddleware() er vitor e redux-logger ba onnno jekono middleware install krso seta bosabo

// products constants
const GET_PD = "GET_PD";
const ADD_PD = "ADD_PD";
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
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getPd());
store.dispatch(addPd("soap"));

//* logger use korar fole action , previous state terminal e deka jacce

/* 
{ products: [ 'sugar', 'salt' ], numberOfPd: 2 }
 action GET_PD @ 16:42:13.895
   prev state { products: [ 'sugar', 'salt' ], numberOfPd: 2 }
   action     { type: 'GET_PD' }
   next state { products: [ 'sugar', 'salt' ], numberOfPd: 2 }
   
{ products: [ 'sugar', 'salt', 'soap' ], numberOfPd: 3 }
 action ADD_PD @ 16:42:13.908
   prev state { products: [ 'sugar', 'salt' ], numberOfPd: 2 }
   action     { type: 'ADD_PD', payload: 'soap' }
   next state { products: [ 'sugar', 'salt', 'soap' ], numberOfPd: 3 }
 */
