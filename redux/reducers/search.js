import { TOGGLE_SEARCH, SET_SEARCH,
    START_SEARCH, STOP_SEARCH, RESET_ERROR_SEARCH, THROW_ERROR_SEARCH, NOT_FOUND, RESET_NOT_FOUND
} from "../actions/types"

const initState = {
    showSearch: false,
    loadingSearch: false,
    errorSearch: "",
    notFound:false
}

export const searchReducer = (state = initState, action) => {
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

        case START_SEARCH:
            return {
                ...state,
                loadingSearch: true
            }

        case STOP_SEARCH:
            return {
                ...state,
                loadingSearch: false
            }

        case THROW_ERROR_SEARCH:
            return {
                ...state,
                errorSearch: "Something went wrong, refresh page to try again"
            }

        case RESET_ERROR_SEARCH:
            return {
                ...state,
                errorSearch: ""
            }
        case NOT_FOUND:
            return {
                ...state,
                notFound: true
            }
        case RESET_NOT_FOUND:
            return {
                ...state,
                notFound: false
            }
        default:
            return state
    }
}