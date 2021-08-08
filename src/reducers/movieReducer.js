import { types } from "../types/types";

const initialState = {
    movies: [],
    active: {
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        image: '',
        qualification: '',
        trailer: ''
    },
    search: []
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.movieLoad:
            return {
                ...state,
                movies: [...action.payload]
            }
        case types.searchMovie:
            return {
                ...state,
                search: [...action.payload]
            }
        case types.movieActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.cleanSearch:
            return {
                ...state,
                search: []
            }
        default:
            return state
    }
}