import axios from "axios"
import { LOAD_QUOTES, LOAD_QUOTES_FAILRUE, LOAD_QUOTES_START, LOAD_QUOTES_SUCCESS } from "../../Action Types/ActionTypes"

export const QuoteAction = () => {
    // return{
    //     type: LOAD_QUOTES
    // }

    return (dispatch, getState) => {

        dispatch({ type: LOAD_QUOTES_START })

        axios.get('https://api.breakingbadquotes.xyz/v1/quotes').then((response) => {
            dispatch({ type: LOAD_QUOTES_SUCCESS, payload: response.data[0].quote })
        }).catch((error) => {
            dispatch({ type: LOAD_QUOTES_FAILRUE, payload: error })
        });
    }
}   