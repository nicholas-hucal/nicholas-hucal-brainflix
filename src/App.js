import './App.scss';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import React from 'react';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';


class App extends React.Component {

  state = {
    videos: videos,
    videoDetails: videoDetails
  }

  render() {
    return (
      <>
        <Nav />
        <VideoHero videoSrc="/" videoType="video/mp4" posterSrc={this.state.videos[0].image} />
      </>
    );
  }
}

export default App;