import VideoControls from '../VideoControls/VideoControls';
import { Component } from "react";
import './VideoHero.scss';

class VideoHero extends Component {
    
    state = {
        isPlaying: false,
        videoLength: '0:00',
        videoPosition: '0:00',
        videoPercent: 0,
        showVolume: false,
        volumeLevel: 80
    }

    videoHandler = (videoRef, control, videoId) => {
        let isPlaying = false;
        if (control === "play") {
            videoRef.play();
            this.props.updateViews(videoId);
            isPlaying = true;
        } else {
            videoRef.pause();
            isPlaying = false;
        }
        this.setState({
            isPlaying: isPlaying,
        })
    };

    fullScreenHandler = (videoRef, command) => {
        if (command === 'full') {
            videoRef.requestFullscreen();
        }
    }

    playerTimelineUpdate = (e) => {
        const videoRef = e.target;
        const targetDuration = videoRef ? videoRef.duration : 0;
        
        const duration = Math.floor(targetDuration / 60 || 0) + ":" + ("0" + Math.floor(targetDuration % 60 || 0)).slice(-2);
        const position = Math.floor(videoRef.currentTime / 60) + ":" + ("0" + Math.floor(videoRef.currentTime % 60)).slice(-2);
        let videoPercent = Math.ceil(videoRef.currentTime / targetDuration * 100);
        videoPercent = Math.floor(videoPercent / 10) * 10
        this.setState({
            videoRef: e.target,
            videoLength: duration,
            videoPosition: position,
            videoPercent: videoPercent
        })
    }

    volumeHandler = () => {
        this.setState({
            showVolume: !this.state.showVolume
        })
    }

    setVolumeHandler = (level) => {
        this.setState({
            volumeLevel: level
        })
    }

    setTimeline = (percent) => {
        console.log(this.state.videoLength);
        const position = Math.floor(percent / 60) + ":" + ("0" + Math.floor(percent % 60)).slice(-2);

        this.setState({
            videoPosition: position,
            videoPercent: percent
        })
    }
    
    render() {
        const { posterSrc, videoSrc, videoType, video } = this.props;
        return (
            <section className='video-hero'>
                <div className='video-hero__container'>
                    <video 
                        className='video-hero__video'
                        onEnded={(e) => this.videoHandler(e.target, 'stop')}
                        onTimeUpdate={(e) => this.playerTimelineUpdate(e)} src={`${videoSrc}.mp4`}
                        crossOrigin='anonymous'
                        poster={posterSrc}
                    >
                    {videoSrc !== '' &&
                        <>
                            <source src={`${videoSrc}.mp4`} type='video/mp4' />
                            <source src={`${videoSrc}.ogg`} type='video/ogg' />
                            <source src={`${videoSrc}.webm`} type='video/webm' />
                        </>
                    }
                    </video>
                    <VideoControls 
                        video={video} 
                        videoSrc={videoSrc} 
                        videoInfo={this.state} 
                        videoHandler={this.videoHandler} 
                        fullScreenHandler={this.fullScreenHandler}
                        volumeHandler={this.volumeHandler}
                        setVolumeHandler={this.setVolumeHandler}
                        setTimeline={this.setTimeline}
                    />
                </div>
            </section>
        )
    }

}

export default VideoHero;