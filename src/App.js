import React, {useState} from "react";
import firebase from "firebase/compat";
import List from "./List";
import Lists from "./Lists";
import TabList from "./TabList";
import './App.css';

import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDeSrL-YstSATx0OqeATHzUBttu5Qxz9tM",
    authDomain: "task-app-34b9f.firebaseapp.com",
    projectId: "task-app-34b9f",
    storageBucket: "task-app-34b9f.appspot.com",
    messagingSenderId: "982606058122",
    appId: "1:982606058122:web:ffce85d25a8dfd5c38d373",
    measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()


const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

function App(props) {
    const [user, loading, error] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            {user.displayName || user.email}
            <SignedInApp {...props} user={user}/>
            <button type="button" className={'largeButton'} onClick={() => auth.signOut()}>Logout</button>
            {!user.emailVerified && <button type="button" className={'largeButton'} onClick={verifyEmail}>Verify email</button>}
        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
            <TabList>
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
            </TabList>
        </>
    }
}

const FAKE_EMAIL = 'foo@bar.com';
const FAKE_PASSWORD = 'xyzzyxx';


function SignIn() {
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Logging in…</p>
    }
    return <div>
        {error && <p>"Error logging in: " {error.message}</p>}
        <button className={'largeButton'} onClick={() =>
            signInWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>Login with test user Email/PW
        </button>
        <button className={'largeButton'} onClick={() =>
            auth.signInWithPopup(googleProvider)}>Login with Google
        </button>
    </div>
}

function SignUp() {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }
    return <div>
        {error && <p>"Error signing up: " {error.message}</p>}
        <button className={'largeButton'} onClick={() =>
            createUserWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>
            Create test user
        </button>

    </div>
}

const collectionName = "People-AuthenticationRequired"

function SignedInApp(props) {
    const listArray = [];
    const [selectedListId, setSelectedListId] = useState(0)


    return (<div className={'App'}>
            <h1 aria-label={"Checklist App"}>Checklist App</h1>
            {selectedListId ? <List db={db} onUnselectListId={setSelectedListId} selectedListId={selectedListId}/>: <Lists db={db} listArray = {listArray} onSelectListId={setSelectedListId} />}
        </div>
    );
}

export default App;
