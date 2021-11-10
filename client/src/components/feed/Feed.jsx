import React from 'react'
import { Post } from '../Post/Post'
import { Share } from '../share/Share'
import './feed.css'
export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
