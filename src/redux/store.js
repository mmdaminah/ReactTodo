import { createStore } from "redux";
import rootReducer from './rootRedcer'
const store = createStore(rootReducer)
export default store;