import './App.scss';
import Nav from './components/Nav/Nav';
import VideoHero from './components/VideoHero/VideoHero';
import React from 'react';
import videosJson from './data/videos.json';
import videosDetailsJson from './data/video-details.json';
import VideoDetails from './components/VideoDetails/VideoDetails';
import VideoList from './components/VideoList/VideoList';
import CommentForm from './components/CommentForm/CommentForm';
import CommentsList from './components/CommentsList/CommentsList';
import Utils from './utils/Utils.js';

class App extends React.Component {

  state = {
    videos: videosJson,
    currentVideo: videosDetailsJson[0]
  }

  render() {
    const { videos, currentVideo } = this.state;

    return (
      <>
        <Nav />
        <VideoHero videoSrc="/" videoType="video/mp4" posterSrc={currentVideo.image} />
        <div className='container'>
          <main>
            <VideoDetails video={currentVideo} dateFunction={Utils} />
            <CommentForm commentsCount={currentVideo.comments.length}/>
            <CommentsList comments={currentVideo.comments} dateFunction={Utils}/>
          </main>
          <aside>
            <VideoList videos={videos}/>
          </aside>
        </div>
      </>
    );
  }
}

export default App;