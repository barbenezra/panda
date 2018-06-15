import { SET_LAST_UPDATED } from './types';

const initialState = Date.now();

export default function lastUpdated(state, action) {
    switch (action.type) {
        case SET_LAST_UPDATED:
            return Date.now();
        default:
            return state || initialState;
    }
}