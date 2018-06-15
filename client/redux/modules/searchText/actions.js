import { SET_SEARCH_TEXT } from './types';

export function setSearchText(text) {
    return { type: SET_SEARCH_TEXT, text };
}