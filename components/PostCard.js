import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }) => {
    return (
        <Link href = {`/posts/${encodeURIComponent(post.uid)}`}>
            <div className = 'p-3 m-2 hover-card hover:cursor-pointer border rounded-xl shadow-lg bg-white'>
                <div className = 'relative'>
                    <div className = 'absolute border-t border-gray-300 bottom-0 left-0 w-full h-16 flex items-center justify-end bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40'>
                        <div className = 'p-4 font-bold text-white'>
                            {post?.author}
                        </div>
                    </div>
                    <img src = {post?.bannerUrl} alt="" className = 'shadow rounded-xl' />
                </div>
                <div className = 'pt-2'>
                    <div className = 'font-bold text-xl pt-4 title'>
                        {post?.title}
                    </div>
                    <div className = 'pt-1 h-12 overflow-hidden mb-5'>
                        {post?.description} 
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard