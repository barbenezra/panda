import { combineReducers } from 'redux';
import lastUpdated from './lastUpdated/reducer';
import searchText from './searchText/reducer';

export default combineReducers({
    lastUpdated,
    searchText
})