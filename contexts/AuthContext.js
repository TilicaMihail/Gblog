import React, { useEffect } from 'react'

const AuthContext = React.createContext()

const AuthProvider = () => {
    const [user, setUser] = useState()

    const login = async (loginEmail, loginPassword) => {
        try{
            setError('')
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword
            );
            console.log(user)
        }
        catch (error) {
            setError(err.message)
        }
    }

    const register = async (username, password) => {

    }

    const getUser = async () => {

    }

    useEffect(() => {

    }, [])

    return (
        <div> AuthProvider</div>
    )
}

export default AuthProvider