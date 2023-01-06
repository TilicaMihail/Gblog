import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const LoginModal = ({ open, setOpen }) => {
    const { login, error, setError } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            {   
                open &&
                <div onClick = {e => {setOpen(false); setError('')}} className = 'fixed z-10 w-screen h-screen top-0 left-0 flex items-center justify-center'>
                    <div onClick = {e => e.stopPropagation()} className = 'border p-4 bg-white shadow-xl sm:w-[450px] rounded-xl'>
                        <div className = 'text-center font-bold text-2xl'>
                            Login
                        </div>
                        <input onChange = {e => setEmail(e.target.value)} value = {email} type="text" className = 'p-3 outline-none rounded-xl mt-3 w-full border' placeholder = 'Email' />
                        <input onChange = {e => setPassword(e.target.value)} value = {password} type="password" className = 'p-3 outline-none rounded-xl mt-3 w-full border' placeholder = 'Password' />
                        <button onClick = {e => {login(email, password); setOpen(false)}} className = 'w-full p-3 text-center bg-green-500 rounded-xl text-white mt-3 font-bold hover:bg-green-600'>
                            Login
                        </button>
                        <div className = 'text-red-500 font-bold pt-3 text-center'>
                            {error}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default LoginModal