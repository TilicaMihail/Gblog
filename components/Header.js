import React from 'react'

const Header = () => {
    return (
        <div className = 'flex justify-between items-center p-2 shadow-xl'>
            <div className = 'flex items-center'>
                <img src = 'https://static4.depositphotos.com/1029305/388/v/450/depositphotos_3882728-stock-illustration-line-art-black-pen.jpg' alt = '' className = 'rounded-full h-10 w-10 ' />
                <div className = 'font-bold text-xl p-2'>
                    Gblog
                </div>
            </div>
            <div className = 'flex items-center'>
                <div className = 'p-1 border-2 rounded-full pl-6 pr-6 ml-2 cursor-pointer font-bold border-black hover:text-white hover:bg-black'>
                    Sign up
                </div>
                <div className = 'p-1 border-2 border-black rounded-full pl-6 pr-6 ml-2 cursor-pointer font-bold  hover:text-white hover:bg-black'>
                    Login
                </div>
            </div>
        </div>
    )
}

export default Header