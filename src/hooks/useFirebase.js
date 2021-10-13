import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";


initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const auth=getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
        
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
          setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              setUser(user);
            }
          });
          
    },[])
    return{
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;