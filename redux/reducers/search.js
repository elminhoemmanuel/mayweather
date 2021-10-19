import { TOGGLE_SEARCH } from "../actions/types"

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
        
        default:
            return state
    }
}