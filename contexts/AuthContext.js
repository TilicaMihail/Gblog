import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [error, setError] = useState('')

    const login = async (loginEmail, loginPassword) => {
        try{
            setError('')
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
        }
        catch (error) {
            setError(error.message)
        }
    }

    const register = async (registerEmail, registerPassword, username) => {
        try{
            setError('')
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
            );
            console.log(user)
            await setDoc(doc(db, 'users', user.user.uid), {
                email: registerEmail,
                username: username,
                posts: []
            })
        }
        catch (error) {
            setError(error.message)
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            if(currentUser) {
                const snap = await getDoc(doc(db, "users", currentUser.uid))
                if(snap.exists())
                    setUser(snap.data())
            } else {
                setUser()
            }
        })
    }, [])

    return (
        <AuthContext.Provider value = {{user, error, setError, login, register, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider