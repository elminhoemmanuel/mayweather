import { TEST } from "../actions/types"

const initState = {
    test:""
}

export const testReducer = (state=initState,action) => {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                test:"test"
            }
        
        default:
            return state
    }
}