const redux = require('redux')
const createStore = redux.createStore



const ORDER_CAKE = "ORDER_CAKE";

function cakeOrder() {
    return {
        type: ORDER_CAKE,
        payload: 1
    }
}

const initialState = {
    noOfCake: 10
}

const reducer = (state = initialState, action) => {

        switch(action.type) {
        case ORDER_CAKE:
            return {
            ...state,
        noOfCake :state.noOfCake - action.payload
}
        default:
            return state
    }   
}

const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() =>
    console.log('updatedstate state', store.getState()))


 store.dispatch(cakeOrder())
store.dispatch(cakeOrder())
store.dispatch(cakeOrder())

unsubscribe();