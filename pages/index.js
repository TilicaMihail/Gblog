import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import { db } from '../firebase-config'
 
export default function Home() {
    const [posts, setPosts] = useState([])
    const [searchFilter, setSearchFilter] = useState('') 

    useEffect(() => {
        const fetchPosts = async () => {  
            if(posts.length !== 0) return  
            const snap = await getDocs(collection(db, "posts"))
            setPosts([])
            snap.forEach(async (doc) => {
                setPosts(p => [...p, doc.data()]) 
            });
        }
        fetchPosts()
    }, [])

    const filterPosts = (post) => {
        return post.title.toLowerCase().includes(searchFilter.toLowerCase()) || post.description.toLowerCase().includes(searchFilter.toLowerCase())
    }

    return (
        <div className = 'bg-gradient'>
            <Header />
            <Hero searchInput = {searchFilter} setSearchInput = {setSearchFilter} />
            <div className = 'flex flex-wrap p-10'>
                {
                    posts.map((post) => {
                        if(!filterPosts(post)) return
                        return (
                            <div key = {post.title} className = 'w-[100%] md:w-[50%] lg:w-[33.3%] aspect-video'>
                                <PostCard post = {post}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
