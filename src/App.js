import './App.scss';
import React from 'react';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';
import VideoList from './components/VideoList/VideoList';
import * as Utils from './utils/Utils.js';
import videosData from './data/videos.json';
import videosDetailsData from './data/video-details.json';

class App extends React.Component {
  videosExtended = videosDetailsData

  state = {
    videos: videosData,
    currentVideo: videosDetailsData[0]
  }

  getCurrentVideo = (videoId) => {
    return this.videosExtended.find((video) => video.id === videoId)
  }

  updateCurrentVideo = (videoId) => {
    this.setState({ currentVideo: this.getCurrentVideo(videoId) })
  }

  render() {
    const { videos, currentVideo } = this.state;
    const filteredVideos = videos.filter(video => video.id !== currentVideo.id)

    return (
      <>
        <Nav />
        <VideoHero videoSrc={currentVideo.video} videoType="video/mp4" posterSrc={currentVideo.image} />
        <div className='container'>
          <main>
            <VideoDetails video={currentVideo} dateFunction={Utils.createHumanReadableDate} />
            <CommentForm commentsCount={currentVideo.comments.length} />
            <CommentList comments={currentVideo.comments} dateFunction={Utils.createHumanReadableDate} />
          </main>
          <aside>
            <VideoList videos={filteredVideos} clickHandler={this.updateCurrentVideo} />
          </aside>
        </div>
      </>
    );
  }
}

export default App;