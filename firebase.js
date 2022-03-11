import { firebase, initializeApp } from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC1J_SZ8tqYUaUcf-hlZv6FzxzaZO6lN-E',
  authDomain: 'facebook-clone-f23fe.firebaseapp.com',
  projectId: 'facebook-clone-f23fe',
  storageBucket: 'facebook-clone-f23fe.appspot.com',
  messagingSenderId: '299484226532',
  appId: '1:299484226532:web:3de8ce4d9115f1fb905df1'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app()

const db = firebaseApp.firestore()
const storage = firebase.storage()

export { db, storage }
