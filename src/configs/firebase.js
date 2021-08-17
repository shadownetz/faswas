import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"
import "firebase/performance"

const firebaseConfig = {
    apiKey: "AIzaSyAlRX_yCDajkkKKHmtO75Al7RFRYAb5q5s",
    authDomain: "faswas-5661c.firebaseapp.com",
    projectId: "faswas-5661c",
    storageBucket: "faswas-5661c.appspot.com",
    messagingSenderId: "112810143274",
    appId: "1:112810143274:web:9b19a8ffea10dd6a139d53",
    measurementId: "G-7FT0PJLBX3"
};
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore
export const storage = firebase.storage
export const auth = firebase.auth
export const storageRef = storage().ref()
export const galleryStore = firestore().collection('gallery')
export const eventStore = firestore().collection('events')
export const volunteerStore = firestore().collection('volunteers')
export const contactStore = firestore().collection('contacts')
export const userStore = firestore().collection('users')

export default firebase