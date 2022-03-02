import './VideoList.scss'
import Video from '../Video/Video';
import Loading from '../Loading/Loading';

function VideoList({ videos, isLoaded }) {
  if (!isLoaded) {
    return (
      <Loading />
    )
  }
  return (
    <section className='video-list'>
      <h3 className='video-list__heading'>Next Videos</h3>
      {videos.map(video => {
        return <Video
          video={video}
          key={video.id} />
      })}
    </section>
  )
}

export default VideoList