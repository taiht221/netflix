// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDMoRVdDIu9VG6BgsiuipPlw2EL_-znCVA',
  authDomain: 'netflix-3236c.firebaseapp.com',
  projectId: 'netflix-3236c',
  storageBucket: 'netflix-3236c.appspot.com',
  messagingSenderId: '989049074172',
  appId: '1:989049074172:web:728554b79e2884541d0279',
  measurementId: 'G-G7WLGQQHET',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
