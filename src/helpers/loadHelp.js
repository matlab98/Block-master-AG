import { db } from "../firebase/firebase-config";

export const loadMovies = async () => {
    const moviesSnap = await db.collection(`/peliculas/`).get()
    const movies = []

    moviesSnap.forEach(snapHijo => {
        movies.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    return movies;
}

export const loadUser = async (id) => {
    const userSnap = await db.collection(`/profile/user/${id}`).get();
    const user = []

    userSnap.forEach(snapHijo => {
        user.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    return user
}

export const loadVerMasTarde = async (id) => {

    const verMasTardeSnap = await db.collection(`verMasTarde/${id}/movies`).get();
    const verMasTarde = [];

    verMasTardeSnap.forEach(snapHijo => {
        verMasTarde.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return verMasTarde;
}

export const loadSearch = async (search) => {
    const busquedaBD = await db.collection(`/peliculas/`).get()

    const resultado = [];

    busquedaBD.forEach(snapHijo => {
        resultado.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    const encontrado = resultado.filter(movies => movies.title.toLowerCase().includes(search))

    return encontrado
}