// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {initializeAuth,getReact} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDFYu4QPBe09dkCIJxqqh2kcHOK-oqbUy8',
    authDomain: 'newchatapp-8a6ea.firebaseapp.com',
    projectId: 'newchatapp-8a6ea',
    storageBucket: 'newchatapp-8a6ea.firebasestorage.app',
    messagingSenderId: '967562712758',
    appId: '1:967562712758:web:f0ef3378d5e8db65de3817',
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
});
