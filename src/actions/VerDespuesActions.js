import { db } from "../firebase/firebase-config"
import { types } from "../types/types"
import { loadVerMasTarde } from '../helpers/loadHelp'

export const AddVerMasTarde = (title, description, category, date, duration, image, qualification, trailer) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newMovie = {
            title,
            description,
            category,
            date,
            duration,
            image,
            qualification,
            trailer:""
        }

        await db.collection(`verMasTarde/${uid}/movies`).add(newMovie)
        dispatch(addNewMovie(uid, newMovie))
        dispatch(startLoadingVerMasTarde(uid))
    }
}

export const addNewMovie = (uid, movie) => ({
    type: types.verMasTardeAdd,
    payLoad: {
        uid,
        ...movie
    }
})

export const startLoadingVerMasTarde = (id) => {
    return async (dispatch) => {

        const movie = await loadVerMasTarde(id);
        dispatch(setVerMasTarde(movie));
    }
}

export const setVerMasTarde = (movie) => ({
    type: types.verMasTardeLoad,
    payload: movie
});

export const startDeletingVerMasTarde = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        await db.doc(`verMasTarde/${uid}/movies/${id}`).delete();
        dispatch(deleteVerMasTarde(id));
    }
}

export const deleteVerMasTarde = (id) => ({
    type: types.verMasTardeDelete,
    payload: id
});