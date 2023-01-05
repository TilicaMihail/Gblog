import React from 'react'

const Hero = () => {
    return (
        <div className = 'p-10 bg-green-500 min-h-[50vh] flex flex-col items-center justify-center'>
            <div className = 'text-6xl font-bold p-2 text-center pb-10'>
                Allways hungry for new knowledge.
            </div>
            <div className = 'flex bg-white rounded-full m-2 '>
                <input type="text" className = 'p-3 pl-5 outline-none text-lg md:w-[50vw] rounded-full ' placeholder = 'Search by name or topic' />
                <button className = 'bg-black text-white rounded-full text-lg font-bold p-3 pl-5 pr-5 hover:bg-gray-700'>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Hero