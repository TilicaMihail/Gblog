import Markdown from 'markdown-to-jsx'
import React from 'react'

const PostPage = ({ post }) => {
    return (
        <div className = 'flex justify-center'>
            <div className = 'max-w-[1200px] grow sm:ml-10 sm:mr-10 p-4 flex flex-col' >
                <div className = 'relative rounded-xl overflow-hidden'>
                    <div className = 'absolute borde border-gray-300 bottom-0 left-0 w-full h-16 flex items-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40'>
                        <div className = 'p-4 font-bold text-4xl'>
                            {post?.title}
                        </div>
                    </div>
                    <img src = {post?.bannerUrl} alt = '' className = 'w-full h-72 object-cover rounded-xl shadow mb-3' />
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