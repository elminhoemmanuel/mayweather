import { 
    START_FETCH, STOP_FETCH, RESET_ERROR, THROW_ERROR, SET_DEFAULT
 } from "../actions/types"
 import axios from "axios"

// action to fetch data on page load
export const fetchDefault = () => (dispatch) => {
    dispatch({ type: RESET_ERROR })
    dispatch({ type: START_FETCH })

    axios.get('https://www.metaweather.com/api/location/1528488/')
        .then((response) => {
            console.log(response.data);
            dispatch({ type: SET_DEFAULT, payload:response.data })
            dispatch({ type: STOP_FETCH })
        }, (error) => {
            console.log(error);
            // console.log(" ended fetch")
            dispatch({ type: THROW_ERROR })
            dispatch({ type: STOP_FETCH })
        });

}

