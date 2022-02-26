import React from 'react'
import './VideoList.scss'
import Video from '../Video/Video'

function VideoList({videos}) {
  return (
    <aside className='video-list'>
        <h5 className='video-list__heading'>Next Videos</h5>
        {videos.map(video => <Video video={video} key={video.id}/>)}
    </aside>
  )
}

export default VideoList