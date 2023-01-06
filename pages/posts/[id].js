import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import PostPage from '../../components/PostPage'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import Header from '../../components/Header'

const Post = () => {
    const [post, setPost] = useState({})
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if(!id) return
                const docSnap = await getDoc(doc(db, "posts", id));
                if (docSnap.exists()) {
                    setPost(docSnap.data());
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchPost()
    }, [id])

    return (
        <div>
            <Header />
            <PostPage post = {post}/>
        </div>
    )
}

export default Post