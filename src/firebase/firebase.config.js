// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsfRSjixxIca2-wv_xDwpokZX_oS2fv6w',
  authDomain: 'dragon-news-d351e.firebaseapp.com',
  projectId: 'dragon-news-d351e',
  storageBucket: 'dragon-news-d351e.firebasestorage.app',
  messagingSenderId: '154693846989',
  appId: '1:154693846989:web:389a53b265e7c5d4632684',
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
export default app;