import { TOGGLE_SEARCH, SET_SEARCH } from "../actions/types"

const initState = {
    showSearch: false
}

export const searchReducer = (state=initState,action) => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return {
                ...state,
                showSearch: !state.showSearch
            }
        
        case SET_SEARCH:
            return {
                ...state,
                showSearch: false
            }
        
        default:
            return state
    }
}