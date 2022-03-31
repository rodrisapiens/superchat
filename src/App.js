import './App.css';
import ChatRoom from './ChatRoom';
import firebase from 'firebase/compat/app';
import SignIn from './SignIn';
import SignOut from './SignOut';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
firebase.initializeApp(
{
  apiKey: "AIzaSyAmi74jLttgzAvcbG0GI9_ai_mU353pGuI",

  authDomain: "superchat-348e6.firebaseapp.com",

  projectId: "superchat-348e6",

  storageBucket: "superchat-348e6.appspot.com",

  messagingSenderId: "690335471552",

  appId: "1:690335471552:web:6cc850f3ef83bd9f4bda25",

  measurementId: "G-FQB7M2P8WH"
}
)
export const auth=firebase.auth();
export const firestore= firebase.firestore();
function App() {
  const [user]=useAuthState(auth)
  return (
    <div className="App">
       <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>
        {user?<ChatRoom/>:<SignIn/>}
      </section>
    </div>
  );
}

export default App;
