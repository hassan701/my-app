import React from 'react'
import { useContext, Children , useState, useEffect } from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider() {
    const [currentUser, setCurrentUser] = useState()
    
    function signup(email, passowrd){
        return auth.createUserWithEmailAndPassword(email,passowrd)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser, signup
    }
  
    return (
    <AuthContext.Provider vaule = {value}>
        {Children}
    </AuthContext.Provider>
  )
}
