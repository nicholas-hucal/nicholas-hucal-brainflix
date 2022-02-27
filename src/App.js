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
  /**
   * Simulated API call, future development goes here
   * @param {String} videoId 
   * @returns {Object}
   */
  getCurrentVideo = (videoId) => {
    videoId = videoId || '84e96018-4022-434e-80bf-000ce4cd12b8'
    const videosExtended = videosDetailsData
    return videosExtended.find((video) => video.id === videoId)
  }

  /**
   * Simulated API call, future development goes here
   * @returns {Array}
   */
  getVideos = () => {
    return videosData
  }

  /**
   * Updates the state with the currentVideo returned from API/Simulated API
   * @param {String} videoId to be sent to server
   */
  updateCurrentVideo = (videoId) => {
    this.setState({ currentVideo: this.getCurrentVideo(videoId) })
  }

  /**
   * Sets the state object with a small list of all available videos and the first video and it's details
   */
  state = {
    videos: this.getVideos(),
    currentVideo: this.getCurrentVideo()
  }

  render() {
    const { videos, currentVideo } = this.state;
    const filteredVideos = videos.filter(video => video.id !== currentVideo.id)

    return (
      <div className='app'>
        <Nav />
        <VideoHero videoSrc="" videoType="" posterSrc={currentVideo.image} />
        <section className='app__container'>
          <main>
            <VideoDetails video={currentVideo} dateFunction={Utils.createHumanReadableDate} />
            <CommentForm commentsCount={currentVideo.comments.length} />
            <CommentList comments={currentVideo.comments} dateFunction={Utils.createHumanReadableDate} />
          </main>
          <aside>
            <VideoList videos={filteredVideos} clickHandler={this.updateCurrentVideo} />
          </aside>
        </section>
      </div>
    );
  }
}

export default App;