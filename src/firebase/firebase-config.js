// import { initializeApp } from 'firebase/app';
// // Import FirebaseAuth and firebase.
// // import React, { useEffect, useState } from 'react';
// // import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// // import firebase from 'firebase';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
  // apiKey: "AIzaSyDwfgURkwz_17cng6gSj9IbYOzeFE1uPHY",
  // authDomain: "final2021-fa8fb.firebaseapp.com",
  // projectId: "final2021-fa8fb",
  // storageBucket: "final2021-fa8fb.appspot.com",
  // messagingSenderId: "754380187010",
  // appId: "1:754380187010:web:0f86fb8d11a55efd871b9b",
  // measurementId: "G-69HBFW90G0"
// };

// const app = initializeApp(firebaseConfig);

// const firebase = require('firebase');
// const firebaseui = require('firebaseui');

// // Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());


// // Configure Firebase.
// const config = {
//   apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
//   authDomain: 'myproject-1234.firebaseapp.com',
//   // ...
// };
// firebase.initializeApp(config);

// // Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: 'popup',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID
//   ],
//   callbacks: {
//     // Avoid redirects after sign-in.
//     signInSuccessWithAuthResult: () => false,
//   },
// };

// function SignInScreen() {
//   const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

//   // Listen to the Firebase Auth state and set the local state.
//   useEffect(() => {
//     const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
//       setIsSignedIn(!!user);
//     });
//     return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
//   }, []);

//   if (!isSignedIn) {
//     return (
//       <div>
//         <h1>My App</h1>
//         <p>Please sign-in:</p>
//         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//       </div>
//     );
//   }
//   return (
//     <div>
//       <h1>My App</h1>
//       <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
//       <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
//     </div>
//   );
// }

// export default SignInScreen;

// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyDwfgURkwz_17cng6gSj9IbYOzeFE1uPHY",
  authDomain: "final2021-fa8fb.firebaseapp.com",
  projectId: "final2021-fa8fb",
  storageBucket: "final2021-fa8fb.appspot.com",
  messagingSenderId: "754380187010",
  appId: "1:754380187010:web:0f86fb8d11a55efd871b9b",
  measurementId: "G-69HBFW90G0"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}

export default SignInScreen;
