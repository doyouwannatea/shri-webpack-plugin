import {
    SET_EVENTS_ACTION,
    SET_SEARCH_TERM_ACTION,
    SET_ERROR_ACTION,
    SET_LOADING_ACTION
} from './actions'

export const setSearchTerm = (term) => ({ type: SET_SEARCH_TERM_ACTION, payload: term })
export const setEvents = (events) => ({ type: SET_EVENTS_ACTION, payload: events })
export const setError = (isError) => ({ type: SET_ERROR_ACTION, payload: isError })
export const setLoading = (isLoading) => ({ type: SET_LOADING_ACTION, payload: isLoading })