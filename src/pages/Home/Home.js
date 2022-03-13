import './Home.scss';
import { Component } from 'react';
import api from '../../utils/api.js';
import VideoHero from '../../components/VideoHero/VideoHero.js';
import VideoDetails from '../../components/VideoDetails/VideoDetails.js';
import CommentForm from '../../components/CommentForm/CommentForm.js';
import CommentList from '../../components/CommentList/CommentList.js';
import VideoList from '../../components/VideoList/VideoList.js';
import Notification from '../../components/Notification/Notification.js';
import NotFound from '../../components/NotFound/NotFound';

class Home extends Component {
    state = {
        videos: [],
        currentVideo: [],
        comments: [],
        videosIsLoaded: false,
        currentVideoIsLoaded: false,
        requestError: false,
        missingError: false
    }

    getCurrentVideo = (videoId) => {
        api
            .getVideoById(videoId)
            .then(response => {
                this.setState({ 
                    currentVideo: response.data,
                    currentVideoIsLoaded: true,
                    comments: response.data.comments.sort((a,b) => b.timestamp - a.timestamp),
                    missingError: false
                })
            })
            .catch(() => {
                this.setState({
                    missingError: true
                })
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
                this.toggleNotification();
            })     
    } 

    addComment = (videoId) => {
        this.getCurrentVideo(videoId);
    } 

    deleteComment = (commentId, videoId) => {
        api
            .deleteComment(commentId, videoId)
            .then(response => {
                this.getCurrentVideo(videoId);
            })
            .catch(error => {
                console.log(error);
                this.toggleNotification();
            })
    }

    componentDidMount() {
        this.getVideos(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        const currentId = this.props.match.params.id;
        const prevId = prevProps.match.params.id;
        const homeId = this.state.videos[0].id;
        if ((prevId !== currentId)) {
            this.getCurrentVideo(currentId || homeId);
            window.scrollTo(0,0);
        }
    }

    toggleNotification = () => {
        this.setState({
            requestError: !this.state.requestError
        });
    }

    resetError = () => {
        this.setState({
            missingError: false
        })
    }

    render() {
        const { videos, currentVideo, videosIsLoaded, currentVideoIsLoaded, requestError, comments, missingError } = this.state;
        const filteredVideos = videos.filter(video => video.id !== currentVideo.id);
         
        return (
            <>
                <VideoHero videoSrc={currentVideo.video} posterSrc={currentVideo.image} isLoaded={currentVideoIsLoaded}/>
                <section className='home'>
                    <main className='home__main'>
                        { !missingError &&    
                            <>
                                <VideoDetails video={currentVideo} isLoaded={currentVideoIsLoaded}/>
                                <CommentForm video={currentVideo} addComment={this.addComment}/>
                                <CommentList 
                                    video={currentVideo}
                                    comments={comments}
                                    deleteComment={this.deleteComment}
                                    isLoaded={currentVideoIsLoaded}
                                />
                            </>
                        }
                        { missingError && <NotFound clickHandler={this.resetError} /> }
                    </main>
                    <aside className='home__aside'>
                        <VideoList videos={filteredVideos} isLoaded={videosIsLoaded}/>
                    </aside>
                </section>
                { requestError && 
                    <Notification
                        title='Network Error'
                        message='There was an error with your request, please refresh the page and try again.'
                        clickHandler={this.toggleNotification} 
                    /> 
                }
            </>
        )
    }
}

export default Home;
