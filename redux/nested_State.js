
const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce

const initialstate = {
    nam: 'vishvas',
    address: {
        street: '123 main sc',
        city: 'Boston',
        state: 'MA'
    },
}

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (street) => {
    return {
        type: UPDATE_STREET,
        payload: street
    }
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case UPDATE_STREET:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     },
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default: {
            return state
        }
    }
}


const store = createStore(reducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() =>
    console.log('updatedstate state', store.getState()))

    //  register listener via subscribe method

store.dispatch(updateStreet("456 main st")) // it allow any update to applicaion state it accept action as its argument it accept a function as its argument that function executed any time that the state and redux store changes

unsubscribe()



