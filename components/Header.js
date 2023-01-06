import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import LoginModal from './auth/login'
import RegisterModal from './auth/register'

const Header = () => {
    const [registerOpen, setRegisterOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const { user, logout } = useContext(AuthContext)

    return (
        <div className = 'flex justify-between items-center p-2 shadow bg-white'>
            <Link href = "/">
                <div className = 'flex items-center'>
                    <img src = 'https://static4.depositphotos.com/1029305/388/v/450/depositphotos_3882728-stock-illustration-line-art-black-pen.jpg' alt = '' className = 'rounded-full h-10 w-10 ' />
                    <div className = 'font-bold text-xl p-2'>
                        Gblog
                    </div>
                </div>
            </Link>
            <div className = 'flex items-center'>
                {
                !user ?
                    <>
                        <div onClick = {e => setRegisterOpen(true)} className = 'p-1 border-2 rounded-full pl-6 pr-6 ml-2 cursor-pointer font-bold border-black hover:text-white hover:bg-black'>
                            Sign up
                        </div>
                        <div onClick = {e => setLoginOpen(true)} className = 'p-1 border-2 border-black rounded-full pl-6 pr-6 ml-2 cursor-pointer font-bold  hover:text-white hover:bg-black'>
                            Login
                        </div>
                    </> 
                : 
                    <>
                        <div className = 'p-1 text-xl pl-6 pr-6 ml-2 font-bold'>
                            {user.username}
                        </div>
                        <Link href = "/write">
                            <div className = 'p-1 border-2 border-dashed border-black rounded-full pl-6 pr-6 ml-2 font-bold cursor-pointer hover:text-white hover:bg-black'>
                                Write
                            </div>
                        </Link>
                        <div onClick = {e => logout()} className = 'flex items-center justify-center text-xl p-2 pl-3 pr-3 border-2 border-black rounded-full ml-2 font-bold cursor-pointer hover:text-white hover:bg-black'>
                            <ion-icon name="log-out-outline"></ion-icon>
                        </div>
                    </>
                }   
            </div>
            <RegisterModal open = {registerOpen} setOpen = {setRegisterOpen} />
            <LoginModal open = {loginOpen} setOpen = {setLoginOpen} />
        </div>
    )
}

export default Header