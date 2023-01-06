import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const RegisterModal = ({ open, setOpen }) => {
    const { register, error, setError } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            {   
                open &&
                <div onClick = {e => {setOpen(false); setError('')}} className = 'fixed z-10 w-screen h-screen top-0 left-0 flex items-center justify-center'>
                    <div onClick = {e => e.stopPropagation()} className = 'border p-4 bg-white shadow-xl sm:w-[450px] rounded-xl'>
                        <div className = 'text-center font-bold text-2xl'>
                            Register
                        </div>
                        <input onChange = {e => setUsername(e.target.value)} value = {username} type="text" className = 'p-3 outline-none rounded-xl mt-3 w-full border' placeholder = 'Username' />
                        <input onChange = {e => setEmail(e.target.value)} value = {email} type="text" className = 'p-3 outline-none rounded-xl mt-3 w-full border' placeholder = 'Email' />
                        <input onChange = {e => setPassword(e.target.value)} value = {password} type="password" className = 'p-3 outline-none rounded-xl mt-3 w-full border' placeholder = 'Password' />
                        <button onClick = {e => { register(email, password, username); setOpen(false)}} className = 'w-full p-3 text-center bg-green-500 rounded-xl text-white mt-3 font-bold hover:bg-green-600'>
                            Register
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

export default RegisterModal