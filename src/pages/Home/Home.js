import './Home.scss';
import { Component } from 'react';
import VideoHero from '../../components/VideoHero/VideoHero';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';
import { BASE_URL as baseUrl, API_KEY as apiKey} from '../../utils/api.js'
import axios from 'axios';

class Home extends Component {
    state = {
        videos: [],
        currentVideo: [],
        videosIsLoaded: false,
        currentVideoIsLoaded: false
    }

    getCurrentVideo = (videoId) => {
        axios
            .get(`${baseUrl}videos/${videoId}?api_key=${apiKey}`)
            .then(response => {
                this.setState({ 
                    currentVideo: response.data,
                    currentVideoIsLoaded: true,
                    commentCount: response.data.comments.length
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    getVideos = (videoId) => {
        axios
            .get(`${baseUrl}videos?api_key=${apiKey}`)
            .then(response => {
                this.setState({ 
                    videos: response.data,
                    videosIsLoaded: true
                })
                videoId = videoId ? videoId : response.data[0].id;
                setTimeout(() =>{
                    this.getCurrentVideo(videoId);
                }, 3500)
            })
            .catch(error => {
                console.log(error);
            })
    } 

    componentDidMount() {
        console.log('mount')
        this.getVideos(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            console.log('update')
            this.getCurrentVideo(this.props.match.params.id);
        }
    }

    render() {
        const { videos, commentCount, currentVideo, videosIsLoaded, currentVideoIsLoaded } = this.state;
        const filteredVideos = videos.filter(video => video.id !== currentVideo.id)
        return (
            <>
                <VideoHero videoSrc="" videoType="" posterSrc={currentVideo.image} isLoaded={currentVideoIsLoaded}/>
                <section className='app__container home'>
                    <main className='home__main'>
                        <VideoDetails video={currentVideo} isLoaded={currentVideoIsLoaded}/>
                        <CommentForm commentsCount={commentCount} isLoaded={currentVideoIsLoaded}/>
                        <CommentList comments={currentVideo.comments} isLoaded={currentVideoIsLoaded}/>
                    </main>
                    <aside className='home__aside'>
                        <VideoList videos={filteredVideos} isLoaded={videosIsLoaded}/>
                    </aside>
                </section>
            </>
        )
    }
}

export default Home;
