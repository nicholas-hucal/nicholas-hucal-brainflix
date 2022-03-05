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
                this.getCurrentVideo(videoId);
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
        const currentId = this.props.match.params.id;
        const prevId = prevProps.match.params.id
        if ((prevId !== currentId)) {
            console.log('update');
            this.getCurrentVideo(currentId || this.state.videos[0].id);
            window.scrollTo(0,0);
        }
    }

    render() {
        const { videos, currentVideo, videosIsLoaded, currentVideoIsLoaded } = this.state;
        const filteredVideos = videos.filter(video => video.id !== currentVideo.id)
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
            </>
        )
    }
}

export default Home;
