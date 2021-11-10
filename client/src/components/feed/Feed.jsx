import React from 'react'
import { Share } from '../share/Share'
import './feed.css'
export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  )
}
