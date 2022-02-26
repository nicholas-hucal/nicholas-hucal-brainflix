import './App.scss';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import React from 'react';
import videosData from './data/videos.json';
import videosDetailsData from './data/video-details.json';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoList from './components/VideoList/VideoList';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';
import * as Utils from './utils/Utils.js';

class App extends React.Component {

  state = {
    videos: videosData,
    videosExtended: videosDetailsData,
    currentVideo: videosDetailsData[0]
  }

  updateCurrentVideo = (videoId) => {
    const newCurrentVideo = this.state.videosExtended.find((video) => video.id === videoId)
    this.setState({ currentVideo: newCurrentVideo})
  }

  render() {
    const { videos, currentVideo } = this.state;
    const filteredVideos = videos.filter(video => video.id !== currentVideo.id)

    return (
      <>
        <Nav />
        <VideoHero videoSrc="/" videoType="video/mp4" posterSrc={currentVideo.image} />
        <div className='container'>
          <main>
            <VideoDetails video={currentVideo} dateFunction={Utils.createHumanReadableDate} />
            <CommentForm commentsCount={currentVideo.comments.length}/>
            <CommentList comments={currentVideo.comments} dateFunction={Utils.createHumanReadableDate}/>
          </main>
          <aside>
            <VideoList videos={filteredVideos} clickHandler={this.updateCurrentVideo}/>
          </aside>
        </div>
      </>
    );
  }
}

export default App;