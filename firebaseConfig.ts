import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config – plist dosyasındaki bilgilerin aynısı
const firebaseConfig = {
    apiKey: 'AlzaSyA2rE0hyWPP2IRgNcXy7C_cFjUQonnC-gc',
    authDomain: 'chat-160d5.firebaseapp.com',
    projectId: 'chat-160d5',
    storageBucket: 'chat-160d5.appspot.com',
    messagingSenderId: '718498410828',
    appId: '1:718498410828:ios:d403fa332ddff815db9fe9',
};

// Uygulamayı başlat
const app = initializeApp(firebaseConfig);

// Kalıcı oturum (persistence) ile auth başlat
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
