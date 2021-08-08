import { loadMovies, loadSearch } from "../helpers/loadHelp";
import { types } from "../types/types";

export const startLoadingMovies = (id) => {
    return async (dispath) => {
        const movies = await loadMovies(id)
        dispath(setMovies(movies))
    }
}

export const setMovies = (movies) => ({
    type: types.movieLoad,
    payload: movies
})

export const activeMovie = (id, movie) => ({
    type: types.movieActive,
    payload: {
        id,
        ...movie
    }
})

export const startSearch = (search) => {
    return async (dispatch) => {
        const movie = await loadSearch(search)
        dispatch(setSearch(movie))
    }
}

export const setSearch = (movie) => ({
    type: types.searchMovie,
    payload: movie
});

export const starCleanSearch = () => {
    return async (dispatch) => {
        dispatch(cleanSearch());
    }
}

export const cleanSearch = () => ({
    type: types.cleanSearch
})