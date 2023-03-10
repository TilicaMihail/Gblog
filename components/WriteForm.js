import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useId, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { db } from '../firebase-config'

const WriteForm = ({ post }) => {
    const uid = useId();
    const [title, setTitle] = useState(post?.title || '')
    const [bannerUrl, setBannerUrl] = useState(post?.bannerUrl || 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_508852084_364873.jpg')
    const [content, setContent] = useState(post?.content || ``)
    const [description, setDescription] = useState(post?.description || '')
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if(post?.title) {
            setTitle(post?.title)
            setBannerUrl(post?.bannerUrl)
            setDescription(post?.description)
            setContent(post?.content)
        }
    }, [post])

    const handlePublish = async (e) => {
        e.preventDefault()
        if(!user) 
            setError('You must be logged in to publish an article!')
        else {
            try{
                await setDoc(doc(db, "posts", post?.uid || uid), {
                    description: description,
                    title: title,
                    bannerUrl: bannerUrl,
                    content: content,
                    author: user.username,
                    uid: post?.uid || uid,
                });
                router.push('/')
            } catch (err) {
                console.log(err)
                setError(err.message)
            }
        }
    }

    return (
        <div className = 'flex justify-center'>
            <form className = 'max-w-[1200px] grow sm:ml-10 sm:mr-10 p-4' onSubmit = {handlePublish} >
                <img src = {bannerUrl} alt = '' className = 'w-full h-72 object-cover rounded-xl shadow border mb-3' />
                <input required type="text" value = {title} onChange = {e => setTitle(e.target.value)} className = 'w-full p-2 font-bold text-4xl rounded-xl mt-2 mb-2 outline-none border shadow ' placeholder = 'Enter a title' />
                <input required type="text" value = {description} onChange = {e => setDescription(e.target.value)} className = 'w-full p-2 text-xl rounded-xl mt-2 mb-2 outline-none border shadow ' placeholder = 'Enter a description' />
                <input required type="text" value = {bannerUrl} onChange = {e => setBannerUrl(e.target.value)} className = 'w-full p-2 text rounded-xl mt-2 mb-2  outline-none border shadow' placeholder = 'Enter the banner url' />
                <textarea required type="text" value = {content} onChange = {e => setContent(e.target.value)} className = 'w-full p-2 text-xl rounded-xl mt-2 mb-2  outline-none border shadow h-[300px]' placeholder = 'Enter the markdown content' />
                <button type = 'submit' className = 'p-2 border-2 text-2xl w-full border-black rounded-xl pl-6 pr-6 font-bold cursor-pointer hover:text-white hover:bg-black'>
                    {post ? 'Edit post' : 'Publish post' }
                </button>
                <div className = 'text-lg text-center text-red-500 font-bold pt-3'>
                    {error} 
                </div>
            </form>
        </div>
    )
}

export default WriteForm