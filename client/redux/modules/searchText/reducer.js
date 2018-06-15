import { SET_SEARCH_TEXT } from './types';

const initialState = '';

export default function searchText(state, action) {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.text;
        default:
            return state || initialState;
    }
}