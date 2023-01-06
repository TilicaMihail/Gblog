import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const PostPage = ({ post }) => {
    const { user } = useContext(AuthContext)
    return (
        <div className = 'flex justify-center'>
            <div className = 'max-w-[1200px] grow sm:ml-10 sm:mr-10 p-4 pt-0 flex flex-col' >
                <div className = 'relative rounded-b-xl overflow-hidden'>
                    <div className = 'absolute borde border-gray-300 justify-between bottom-0 left-0 w-full h-16 flex items-center bg-clip-padding backdrop-filter backdrop-blur-lg bg-black bg-opacity-40'>
                        <div className = 'p-4 font-bold text-4xl text-white'>
                            {post?.title}
                        </div>
                        { user && user.username === post.author &&
                            <Link href = {`/write/${encodeURIComponent(post.uid)}`}>
                                <div className = 'text-white p-2 border-2 border-white hover:border-black rounded-full pl-6 pr-6 ml-2 font-bold cursor-pointer hover:text-white hover:bg-black m-4'>
                                    Edit post
                                </div>
                            </Link>
                        }
                    </div>
                    <img src = {post?.bannerUrl} alt = '' className = 'w-full h-[330px] object-cover shadow mb-2' />
                </div>
                <div className = 'w-full prose lg:prose-xl max-w-none'>
                    <Markdown>
                        {post?.content || ''}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}

export default PostPage