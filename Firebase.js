
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAGuJRkd4OyZBHDwp-OMpKxPuwhnqUfwU",
    authDomain: "your-project-name.firebaseapp.com",
    databaseURL: "https://gydable-af04.firebaseio.com",
    projectId: "gydable-af047",
    storageBucket: "gydable-af047.appspot.com",
    messagingSenderId: "115901888537",
    appId: "1:115901888537:web:244e628055657e59d25288",
    measurementId: "G-DMXWNEW15S"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;










