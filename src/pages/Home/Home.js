import './Home.scss';
import { Component } from 'react';
import api from '../../utils/api.js';
import VideoHero from '../../components/VideoHero/VideoHero';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';
import Notification from '../../components/Notification/Notification';

class Home extends Component {
    state = {
        videos: [],
        currentVideo: [],
        videosIsLoaded: false,
        currentVideoIsLoaded: false,
        requestError: false,
    }

    getCurrentVideo = (videoId) => {
        api
            .getVideoById(videoId)
            .then(response => {
                this.setState({ 
                    currentVideo: response.data,
                    currentVideoIsLoaded: true,
                })
            })
            .catch(() => {
                this.showNotification();
            })
    }

    getVideos = (videoId) => {
        api
            .getAllVideos()
            .then(response => {
                this.setState({ 
                    videos: response.data,
                    videosIsLoaded: true
                })
                videoId = videoId ? videoId : response.data[0].id;
                this.getCurrentVideo(videoId);
            })
            .catch(() => {
                this.showNotification();
            })     
    } 

    componentDidMount() {
        this.getVideos(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        const currentId = this.props.match.params.id;
        const prevId = prevProps.match.params.id;
        if ((prevId !== currentId)) {
            this.getCurrentVideo(currentId || this.state.videos[0].id);
            window.scrollTo(0,0);
        }
    }

    showNotification = () => {
        this.setState({
            requestError: true
        });
    }

    hideNotification = () => {
        this.setState({
            requestError: false
        });
    }

    render() {
        const { videos, currentVideo, videosIsLoaded, currentVideoIsLoaded, requestError } = this.state;
        const filteredVideos = videos.filter(video => video.id !== currentVideo.id);
         
        return (
            <>
                <VideoHero videoSrc="" videoType="" posterSrc={currentVideo.image} isLoaded={currentVideoIsLoaded}/>
                <section className='home'>
                    <main className='home__main'>
                        <VideoDetails video={currentVideo} isLoaded={currentVideoIsLoaded}/>
                        <CommentForm isLoaded={currentVideoIsLoaded}/>
                        <CommentList comments={currentVideo.comments} isLoaded={currentVideoIsLoaded}/>
                    </main>
                    <aside className='home__aside'>
                        <VideoList videos={filteredVideos} isLoaded={videosIsLoaded}/>
                    </aside>
                </section>
                { requestError && <Notification title='Network Error' message='There was an error with your request, please refresh the page and try again.' clickHandler={this.hideNotification} /> }
            </>
        )
    }
}

export default Home;
