<!-- initial setup without react -->

npm init -y
npm i redux

<!-- state ke manage korar prpose e redux use kora hoy -->

intialState = {count: 0}

<!-- ki korte chaccen setai hocce action -->

i:e: increment couner, decrement counter
redux e action ekti obj thake
amra ekti function e action gulo rakhi, type & payload return kori
sekhane 2 ti jinis niye kaj hoy:

1. type (ki type er action)
2. payload (kono data pass krte chaile seta payload e rakhte hoy)

cnst ActionType = "increment"
const someAction = ()=>{
return{
type:ActionType,
payload:[
{
name:"ABC"
}

    }

}

<!---------------- REDUCER ---------------------->

reducer muloto ekta pure function (je func. input niye definetely kisu output dibe)

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
      state; //* definetely kisu return krbo

}
}
