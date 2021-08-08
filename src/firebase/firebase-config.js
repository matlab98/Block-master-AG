import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB6GAF3bVunZEx5-x_cHiYBpf37o90mmuQ",
    authDomain: "blockmaster-15411.firebaseapp.com",
    projectId: "blockmaster-15411",
    storageBucket: "blockmaster-15411.appspot.com",
    messagingSenderId: "217183088177",
    appId: "1:217183088177:web:8fc2e8c810d0edb1e46f10"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    firebase
}