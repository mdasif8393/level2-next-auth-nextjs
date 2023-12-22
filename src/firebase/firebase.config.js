// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIS3ZCPIMm9H5UtWEw-0Nk_FSdniiThXY",
    authDomain: "level2-technet-react-redux.firebaseapp.com",
    projectId: "level2-technet-react-redux",
    storageBucket: "level2-technet-react-redux.appspot.com",
    messagingSenderId: "800805434596",
    appId: "1:800805434596:web:b25087afd82bd2de1ca8f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;