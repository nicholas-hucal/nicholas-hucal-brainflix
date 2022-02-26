import React from 'react'
import './VideoList.scss'
import Video from '../Video/Video'

function VideoList({videos, clickHandler}) {
  return (
    <section className='video-list'>
        <h3 className='video-list__heading'>Next Videos</h3>
        {videos.map(video => {
          return <Video
                    video={video} 
                    key={video.id} 
                    clickHandler={clickHandler}/>
        })}
    </section>
  )
}

export default VideoList