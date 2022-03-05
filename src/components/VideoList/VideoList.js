import './VideoList.scss'
import Video from '../Video/Video';
import { v4 as uuidv4 } from 'uuid';

function VideoList({ videos, isLoaded }) {
  const allVideos = videos.length > 0 ? videos : Array.from(Array(8), () => []);
  return (
    <section className='video-list'>
      <h3 className='video-list__heading'>Next Videos</h3>
      {allVideos.map(video => {
        return <Video
          video={video}
          key={uuidv4()}
          isLoaded={isLoaded} />
      })}
    </section>
  )
}

export default VideoList