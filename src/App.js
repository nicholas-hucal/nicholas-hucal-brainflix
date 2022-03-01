import './App.scss';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import videosData from './data/videos.json';
import videosDetailsData from './data/video-details.json';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import NotFound from './pages/NotFound/NotFound';

class App extends Component {
  /**
   * Simulated API call, future development goes here
   * @param {String} videoId 
   * @returns {Object}
   */
  getCurrentVideo = (videoId) => {
    return videosDetailsData.find((video) => video.id === videoId) || videosDetailsData[0]
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
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route
              path="/"
              exact
              render={
                (routerProps) => <Home
                  currentVideo={currentVideo}
                  filteredVideos={filteredVideos}
                  updateCurrentVideo={this.updateCurrentVideo}
                  {...routerProps}
                />
              }
            />
            <Route path="/upload" component={Upload} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;