import {getApp,getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBKK9OhClmaD4swgNPmLfbk06IUrIxtjRo",
    authDomain: "restaurantapp-71a8b.firebaseapp.com",
    databaseURL: "https://restaurantapp-71a8b-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-71a8b",
    storageBucket: "restaurantapp-71a8b.appspot.com",
    messagingSenderId: "965126459284",
    appId: "1:965126459284:web:099482429dafa546858981"
  };

  const app=getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore= getFirestore(app);
  const storage=getStorage(app);

  export {app, firestore, storage}