import { types } from "../types/types"

const initialState = {
    movies: []
}
const verMasTardeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.verMasTardeAdd:
            return {
                ...state,
                movies: [action.payload, ...state.movies]
            }
        case types.verMasTardeLoad:
            return {
                ...state,
                movies: [...action.payload]
            }
        case types.moviesDelete:
            return {
                ...state,
                movies: state.movies.filter(crt => crt.id !== action.payload)
            }
        default:
            return state;
    }
}

export default verMasTardeReducer