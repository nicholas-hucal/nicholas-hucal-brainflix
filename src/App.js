import './App.scss';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import React from 'react';
import videosJson from './data/videos.json';
import videosDetailsJson from './data/video-details.json';
import VideoDetails from './components/VideoDetails/VideoDetails';

class App extends React.Component {

  state = {
    videos: videosJson,
    currentVideo: videosDetailsJson[0]
  }

  render() {
    const { videos, currentVideo } = this.state;

    const formatDateForSite = (timestamp) => {
      if (timestamp) {
        return new Date(Number(timestamp)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
      }
      return new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }

    return (
      <>
        <Nav />
        <VideoHero videoSrc="/" videoType="video/mp4" posterSrc={currentVideo.image} />
        <VideoDetails video={currentVideo} dateFunction={formatDateForSite} />
      </>
    );
  }
}

export default App;