const redux = require('redux')
const createStore = redux.createStore
//const bindActioncreaters = redux.bindActionCreators;
const combineReducer = redux.combineReducers;
const applyMiddleeare = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTORED = "ICECREAM_RESTORED";

// HERE FUNCTION WORK AS ACTION CREATER & action creaters always return a action.
// action describe what happen 
function orderCake() {
    return {
        type: CAKE_ORDERED, // action is an object with type property 
        payload: 1
    }
}

function restockedCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}
function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty,
    }
}
function restockedIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTORED,
        payload: qty,
    }
}

// const initialState = {
//     numOfCake: 10,
//     noOfIceCream: 20,
// }

const initialCakestate = {
    numOfCake: 10
}

const initialIceCreamState = {
    noOfIceCream: 20,
}

// reducer specfies how state changes 
// reducer take the previors state and action and return a new state.
const cakeReducer = (state = initialCakestate, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCake - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCake: state.numOfCake + action.payload,
            }

        default:
            return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1,
            }
        case ICECREAM_RESTORED:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream + action.payload,
            }
        default:
            return state
    }
}
const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleeare(logger));
console.log('initial staste', store.getState());
const unsubscribe = store.subscribe(() => { }
    // console.log('updasted state', store.getState())
)

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockedCake(3))
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockedIceCream(2))

// const action =  bindActioncreaters({orderCake,restockedCake},store.dispatch)
// action.orderCake()
// action.orderCake()
// action.orderCake()
// action.restockedCake(3)
unsubscribe()