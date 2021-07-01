import {
    SET_EVENTS_ACTION,
    SET_SEARCH_TERM_ACTION,
    SET_ERROR_ACTION,
    SET_LOADING_ACTION
} from './actions'

const initialState = {
    searchTerm: '',
    events: [],
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM_ACTION:
            return { ...state, searchTerm: action.payload }
        case SET_EVENTS_ACTION:
            return { ...state, events: action.payload }
        case SET_ERROR_ACTION:
            return { ...state, error: action.payload }
        case SET_LOADING_ACTION:
            return { ...state, loading: action.payload }
    }

    return state
}

export default reducer