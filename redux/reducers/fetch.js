import { 
    START_FETCH, STOP_FETCH, RESET_ERROR, THROW_ERROR, SET_DEFAULT, RESET_DETAILS,
    SET_UNIT
 } from "../actions/types"

const initState = {
    loading:true,
    error:"",
    details:{},
    unit:"cel"
}

export const fetchReducer = (state=initState,action) => {
    switch (action.type) {
        case START_FETCH:
            return {
                ...state,
                loading: true
            }
        
        case STOP_FETCH:
            return {
                ...state,
                loading: false
            }
        
        case THROW_ERROR:
            return {
                ...state,
                error: "Something went wrong, refresh page to try again"
            }
        
        case RESET_ERROR:
            return {
                ...state,
                error: ""
            }
        
        case RESET_DETAILS:
            return {
                ...state,
                details: {}
            }
        
        case SET_DEFAULT:
            return {
                ...state,
                details: action.payload
            }
        
        case SET_UNIT:
            return {
                ...state,
                unit: action.payload
            }
        
        default:
            return state
    }
}