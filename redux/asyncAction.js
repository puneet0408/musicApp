
const { default: axios } = require('axios')
const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default 
const cresteStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
//const axios = require('axios')

const USER_REQUESTED = "USER_REQUESTED"
const USER_SUCESS = "USER_SUCESS"
const USER_FAILED = "USER_FAILED"



function userRequest() {
    return {
        type: USER_REQUESTED
    }
}
function userSucess(user) {
    return {
        type: USER_SUCESS,
        payload: user
    }
}
function userFailed(error) {
    return {
        type: USER_FAILED,
        payload: error
    }
}
const initialstate = {
    loading: false,
    user: [],
    error: " "
}
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case USER_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case USER_SUCESS:
            return {
                ...state,
                loading:false,
                user: action.payload,
            }
        case USER_FAILED:
            return {
                ...state,
                loading:false,
                error: action.payload,
            }
        default: {
            return state
        }
    }
}

// with data comming from  beckend 

// action creater  return a function at the place of object it done with the help of thunk keyword

const fetchUser = () =>{

    // 

  return function (dispatch) {
    dispatch(userRequest())
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then((response) =>{
        const user = response.data.map((user)=>user.id)
        dispatch(userSucess(user))
     }).catch(error =>{
        dispatch(userFailed(error.message))

     })
  }
}

const store = cresteStore(reducer , applyMiddleware(thunkMiddleware));

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchUser())



// with local pass data 

// let unsubscribe = store.subscribe(() => {
//     console.log("updated state" , store.getState());
// })

// store.dispatch(userRequest())
// store.dispatch(userSucess("puneet"))
// store.dispatch(userFailed("error"))

//unsubscribe()
