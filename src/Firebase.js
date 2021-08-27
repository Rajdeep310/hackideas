import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyATQp28ZAq-MEgEyyYU54mxzBhM-nyHXOg",
    authDomain: "hackideas-f5fb6.firebaseapp.com",
    projectId: "hackideas-f5fb6",
    storageBucket: "hackideas-f5fb6.appspot.com",
    messagingSenderId: "488061668807",
    appId: "1:488061668807:web:97053149c224046daf9de2",
    measurementId: "G-2XN8PNS2NK"
  };
  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;