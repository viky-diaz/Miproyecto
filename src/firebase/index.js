import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp (
    {
            apiKey: "AIzaSyAKXa4Yj2r-6h6Bk8YzqbkrSNpF6nB4jTo",
            authDomain: "e-commerce-cc922.firebaseapp.com",
            databaseURL: "https://e-commerce-cc922.firebaseio.com",
            projectId: "e-commerce-cc922",
            storageBucket: "e-commerce-cc922.appspot.com",
            messagingSenderId: "1052563695989",
            appId: "1:1052563695989:web:32f6446455d3eba67acb3c",
            measurementId: "G-DLC57XBYJH"    
    }
)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}
