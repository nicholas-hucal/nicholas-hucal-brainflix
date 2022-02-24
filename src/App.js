import './App.scss';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import React from 'react';
import videos from './data/videos.json';
import VideoDetails from './components/VideoDetails/VideoDetails';


class App extends React.Component {

  state = {
    videos: videos
  }

  render() {

    const formatDateForSite = (timestamp) => {
      if (timestamp) {
        return new Date(Number(timestamp)).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
      }
      return new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    }

    return (
      <>
        <Nav />
        <VideoHero videoSrc="/" videoType="video/mp4" posterSrc={this.state.videos[0].image} />
        <VideoDetails video={this.state.videos[0]} dateFunction={formatDateForSite} />
      </>
    );
  }
}

export default App;