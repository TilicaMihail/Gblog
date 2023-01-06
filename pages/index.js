import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import { db } from '../firebase-config'
 
export default function Home() {
    const [posts, setPosts] = useState([])
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

    return (
        <div className = ''>
            <Header />
            <Hero />
            <div className = 'flex flex-wrap p-10'>
                {
                    posts.map((post) => {
                        
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
