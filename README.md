## ----------- initial setup without react ----------------

npm init -y
npm i redux

## ------ state ke manage korar prpose e redux use kora hoy -----

intialState = {count: 0}

## ki korte chaccen setai hocce action

- i:e: increment couner, decrement counter
- redux e action ekti obj thake
- amra ekti function e action gulo rakhi, type & payload return kori

# sekhane 2 ti jinis niye kaj hoy:

- 1. type (ki type er action)
- 2. payload (kono data pass krte chaile seta payload e rakhte hoy)

## example

```
const ActionType = "increment"
const someAction = ()=>{
return{
type:ActionType,
payload:[
{
name:"ABC"
}

    }

}
```

# ------------ REDUCER --------------------

# reducer muloto ekta pure function (je func. input niye definetely kisu output dibe)

```
const counterReducer = (state=initialState,action)=>{
switch (action.type) {
case INCREMENT:
return {
//_ multiple state thakle spread krbo
...state,
//_ shudhu count ke update krbo
count: state.count + 1,
};
case DECREMENT:
return {
...state,
count: state.count - 1,
};

    default:
    return  state; //* definetely kisu return krbo

}
}
```

# ------------ Multiple Reducer ------------------

## combineReducer namer function ke import krte hbe

```
<!-- initial state -->
const initA = {item:["a","b"],number:2}
const initB  = {item:["x"], number:1}

<!-- action type -->
const GET_A = "GET_A"
const ADD_A = "ADD_A"
const GET_B = "GET_B"
const ADD_B = "ADD_B"

<!-- define action of A -->
const getA = ()=>{
    return{
        type:GET_A
    }
}
const addA = (value)=>{
    return{
        type:ADD_A,
        payload:value
    }
}
<!-- define action of B -->
const getB = ()=>{
    return{
        type:GET_B
    }
}
const addB = (value)=>{
    return{
        type:ADD_B,
        payload:value
    }
}
<!-- reducer of A -->
const reducerA = (state=initA,action)=>{
        switch(action.type){
            case GET_A:
            return{
                ...state
            }
            case ADD_A:
            return{
                item: [...state.item,action.payload],
                number: state.number + 1
            }
            default:
            return state
        }
}

<!-- reducer of B-->
const reducerB = (state=initB,action)=>{
        switch(action.type){
            case GET_B:
            return{
                ...state
            }
            case ADD_B:
            return{
                item: [...state.item,action.payload],
                number: state.number + 1
            }
            default:
            return state
        }
}

//* store shudhu matro 1 tai reducer nite pare, tai multiple reducer ke combine kora lagbe

<!-- combine reducer 1 obj store kore -->
const rootReducer = combineReducers({
    reducerOfA: reduceA,
    reducerOfB: reduceB,
})

<!-- store e rootReducer pass -->
const store = createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getA)  //{item:["a","b"],number:2}
store.dispatch(addA("c"))  //{item:["a","b","c"],number:3}
store.dispatch(getB)    //{item:["x"],number:1}
store.dispatch(addB("y"))    // {item:["x","y"],number:2}
```
