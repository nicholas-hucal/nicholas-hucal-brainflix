import React, { Component } from 'react';
import VideoHero from '../../components/VideoHero/VideoHero';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';
import * as Utils from '../../utils/Utils.js';
import videosData from '../../data/videos.json';
import videosDetailsData from '../../data/video-details.json';

class Home extends Component {

    
    getCurrentVideo = (videoId) => {
        return videosDetailsData.find((video) => String(video.id) === String(videoId)) || videosDetailsData[0]
    }
    
    getVideos = () => {
        return videosData
    }
    
    updateCurrentVideo = (videoId) => {
        this.setState({ currentVideo: this.getCurrentVideo(videoId) })
    }
    
    
    componentDidMount() {
        this.updateCurrentVideo(this.props.match.params.id)
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.updateCurrentVideo(this.props.match.params.id);
        }
    }
    
    state = {
        videos: this.getVideos(),
        currentVideo: this.getCurrentVideo()
    }

    render() {
        const { videos, currentVideo } = this.state;
        const filteredVideos = videos.filter(video => video.id !== currentVideo.id)

        return (
            <>
                <VideoHero videoSrc="" videoType="" posterSrc={currentVideo.image} />
                <section className='app__container'>
                    <main>
                        <VideoDetails video={currentVideo} dateFunction={Utils.createHumanReadableDate} />
                        <CommentForm commentsCount={currentVideo.comments.length} />
                        <CommentList comments={currentVideo.comments} dateFunction={Utils.createHumanReadableDate} />
                    </main>
                    <aside>
                        <VideoList videos={filteredVideos} />
                    </aside>
                </section>
            </>
        )
    }
}

export default Home;
