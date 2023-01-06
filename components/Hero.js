import React from 'react'

const Hero = ({ searchInput, setSearchInput}) => {
    return (
        <rect className = 'p-10 min-h-[48vh] flex flex-col items-center justify-center' fill = 'url(#grid-pattern)'>
            <div className = 'text-6xl font-bold p-2 text-center pb-10'>
                Allways hungry for new knowledge.
            </div>
            <div className = 'flex bg-white rounded-full m-2 border border-gray-300'>
                <input value = {searchInput} onChange = {e => setSearchInput(e.target.value)} type="text" className = 'p-3 pl-5 outline-none text-lg md:w-[50vw] rounded-full ' placeholder = 'Search by name or topic' />
                <button className = 'bg-black text-white rounded-full text-lg font-bold p-3 pl-5 pr-5 hover:bg-gray-700'>
                    Search
                </button>
            </div>
        </rect>
    )
}

export default Hero