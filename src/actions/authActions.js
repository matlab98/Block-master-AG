import { googleAuthProvider, firebase, facebookAuthProvider, db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { starLoading, finishLoading } from './uiError'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))
                dispatch(finishLoading())
                dispatch(starLoading())
            })
            .catch(e => {
                dispatch(finishLoading())
                console.log(e);
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(async ({ user }) => {
                
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber))
            })
            .catch(e => {
                console.log(e);
            })
    }
}
export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(async ({ user }) => {

                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber)
                )
            })
            .catch(e => {
                console.log(e);
            }
            )
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const login = (uid, displayName, email, image, phone) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            email,
            image,
            phone
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})

export const userDate = (usuario, email) => {
    return {
        type: userDate,
        payload: {
            usuario,
            email
        }
    }
}

export const newProfile = (uid, user) => {
    return {
        type: types.addUser,
        payload: {
            uid,
            ...user
        }
    }
}