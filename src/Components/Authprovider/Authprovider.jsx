import { createContext, useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword ,onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import app from "../../Firebase/Firebase.config";



 export const AuthContext=createContext(null)

 
 const Authprovider = ({children}) => {

    const [User,setUser]=useState(null)
    const [reload,setreload]=useState(true)

    const auth = getAuth(app);

    const createUser=(email,password)=>{
        setreload(true)
        return createUserWithEmailAndPassword(auth,email,password
            );
    }
    const login=(email,password)=>{
        setreload(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setreload(true)
        return signOut(auth)
    }
   

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (currentuser) => {
           setUser(currentuser)
           console.log(currentuser)
           setreload(false)
          });
          return ()=>{unSubscribe()}
    },[])




    const Authinfo={
        User,createUser,logout,login,reload
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
 };
 
 export default Authprovider;