import { LOAD_QUOTES_FAILRUE, LOAD_QUOTES_START, LOAD_QUOTES_SUCCESS } from "../../Action Types/ActionTypes";

const initialState = {
    quote: 'Done Is Better Than Perfect.',
    isLoading: false,
    isError: false
}

export const QuoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_QUOTES_START:
            return Object.assign({}, state, { isLoading: true, isError: false })
        case LOAD_QUOTES_SUCCESS:
            return Object.assign({}, state, { isLoading: false, quote: action.payload })
        case LOAD_QUOTES_FAILRUE:
            return Object.assign({}, state, { isLoading: false, isError: action.payload })


        default:
            return state
    }
}