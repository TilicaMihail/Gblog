import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import WriteForm from '../../components/WriteForm'
import { db } from '../../firebase-config'

const index = () => {
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
    console.log(post)

    return (
        <div>
            <Header />
            <WriteForm post = {post} />
        </div>
    )
}

export default index