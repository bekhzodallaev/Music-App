import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCuuUOjwic_aM0aBgrrRmr1IOKFXuszqW4',
  authDomain: 'music-0210.firebaseapp.com',
  projectId: 'music-0210',
  storageBucket: 'music-0210.appspot.com',
  appId: '1:784498899317:web:9b69e0dc31199a1cadbb3c',
  measurementId: 'G-7DVKD1EMN3'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }