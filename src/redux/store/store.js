import {createStore} from 'redux'
import { combineReducers } from 'redux';
import cart from '../reducers/cart';
import wishlist from '../reducers/wishlist';

const rootReducer=combineReducers({cart, wishlist})
const store=createStore(rootReducer);
export default store;