import { combineReducers, legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import{thunk} from "redux-thunk"
import { UserReducer } from "../users/reducers";



const reducers = combineReducers({
    user:UserReducer
})


const store = createStore(
    reducers, applyMiddleware(thunk)
)


export default store