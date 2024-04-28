import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase.config";




export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = (name, email, image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            email:email,
            photoURL:image
        })
    }
    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = ()=>{
        setUser(null)
        signOut(auth)
    }
    //observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
        })
        return ()=>unsubscribe()
    },[auth])
    const info = {createUser, user,logOut,updateUserProfile,logInUser,setUser,googleLogin,githubLogin}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;