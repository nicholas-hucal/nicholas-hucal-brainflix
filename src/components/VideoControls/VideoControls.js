import './VideoControls.scss';
import play from '../../assets/images/icons/Icon-play.svg';
import pause from '../../assets/images/icons/Icon-pause.svg';
import fullscreen from '../../assets/images/icons/Icon-fullscreen.svg';
import volume from '../../assets/images/icons/Icon-volume.svg';

const VideoControls = ({ videoSrc, videoInfo, videoHandler, fullScreenHandler, video, volumeHandler, setVolumeHandler }) => {
    const { videoLength, videoPosition, videoPercent, isPlaying, videoRef, showVolume, volumeLevel } = videoInfo;
    const realPercent = isNaN(videoPercent) ? 0 : videoPercent;

    const videoCheck = (action) => {
        action = action ? 'pause' : 'play';
        if (videoSrc !== '') {
            videoHandler(videoRef, action, video.id)
        }
    }

    const videoChangePosition = (e) => {
        console.log(e.target.value)
    }

    const openVolume = () => {
        volumeHandler();
    }

    const setVolume = (e) => {
        setVolumeHandler(e.target.value)
    }

    return (
        <div className='video-controls'>
            <div className='video-controls__controls'>
                <section className='video-controls__shaded' onClick={() => videoCheck(isPlaying)} >
                    {!isPlaying &&
                        <img className='video-controls__play' src={play} alt="play button" />
                    }
                    {isPlaying &&
                        <img className='video-controls__play' src={pause} alt="pause button" />
                    }
                </section>
                <section className='video-controls__shaded video-controls__shaded--wide'>
                    <input
                        className={`video-controls__scrubber-input video-controls__scrubber-input--${realPercent}`}
                        type="range"
                        defaultValue={realPercent}
                        min="0"
                        max="100"
                        step="10"
                        onChange={videoChangePosition}
                    />
                    <p className='video-controls__timer'>
                        <span>{videoPosition}</span>
                        /
                        <span>{videoLength}</span>
                    </p>
                </section>
                <section className='video-controls__shaded'>
                    <img className='video-controls__fullscreen' src={fullscreen} alt="fullscreen button" onClick={() => fullScreenHandler(videoRef, 'full')} />
                    <img className='video-controls__volume' src={volume} alt="volume button" onClick={openVolume} />
                    {showVolume &&
                        <input
                            className={`video-controls__volume-up video-controls__volume-up--${volumeLevel}`}
                            type="range"
                            defaultValue={volumeLevel}
                            min="0"
                            max="100"
                            step="10"
                            onChange={setVolume}
                        />
                    }
                </section>
            </div>
        </div>
    )
}

export default VideoControls