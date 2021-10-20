import {
     SET_DEFAULT,TOGGLE_SEARCH,
    START_SEARCH, STOP_SEARCH, RESET_ERROR_SEARCH, THROW_ERROR_SEARCH, NOT_FOUND, RESET_NOT_FOUND
} from "../actions/types"
import axios from "axios"


// action to search for weather data
export const search = (value) => (dispatch) => {
    dispatch({ type: RESET_ERROR_SEARCH })
    dispatch({ type: RESET_NOT_FOUND })
    dispatch({ type: START_SEARCH })

    axios.get(`https://www.metaweather.com/api/location/search/?query=${value}`)
        .then((response) => {
            console.log(response.data);

            if(response.data[0] === undefined){

                dispatch({ type: NOT_FOUND });
                dispatch({ type: STOP_SEARCH })

            } else{

                axios.get(`https://www.metaweather.com/api/location/${response.data[0].woeid}/`)
                .then((response) => {
                    console.log(response.data);
                    dispatch({ type: SET_DEFAULT, payload: response.data })
                    dispatch({ type: STOP_SEARCH })
                    dispatch({ type: TOGGLE_SEARCH })
                }, (error) => {
                    console.log(error);
                    // console.log(" ended fetch")
                    dispatch({ type: THROW_ERROR_SEARCH })
                    dispatch({ type: STOP_SEARCH })
                });

            }
            
        }, (error) => {
            console.log(error);
            // console.log(" ended fetch")
            dispatch({ type: THROW_ERROR_SEARCH })
            dispatch({ type: STOP_SEARCH })
        });

}