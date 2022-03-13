import './VideoControls.scss';
import play from '../../assets/images/icons/Icon-play.svg';
import pause from '../../assets/images/icons/Icon-pause.svg';
import fullscreen from '../../assets/images/icons/Icon-fullscreen.svg';
import volume from '../../assets/images/icons/Icon-volume.svg';
import scrubber from '../../assets/images/icons/Icon-scrubber-control.svg';
import { Component } from 'react';

const VideoControls = ({videoSrc, videoInfo, videoHandler, fullScreenHandler}) => {

    const { videoLength, videoPosition, percent, isPlaying, videoRef } = videoInfo;

    const realPercent = isNaN(percent) ? 0 : percent;
    const scrubberPosition = realPercent < 5 ? realPercent : realPercent - 1.5;

    const videoCheck = (action) => {
        if (videoSrc !== '') {
            videoHandler(videoRef, action)
        }
    }

    const videoChangePosition = (e) => {
        console.log(e)
    }

    return (
        <div className='video-controls'>
            <div className='video-controls__controls'>
                <section className='video-controls__shaded'>
                    {!isPlaying &&
                        <img className='video-controls__play' src={play} alt="play button" onClick={() => videoCheck("play")} />
                    }
                    {isPlaying &&
                        <img className='video-controls__play' src={pause} alt="pause button" onClick={() => videoCheck('pause')} />
                    }
                </section>
                <section className='video-controls__shaded video-controls__shaded--wide'>
                    <div className='video-controls__scrubber-bar'>
                        <div style={{ width: `${realPercent}%` }} className="video-controls__scrubber-line"></div>
                        <div style={{ width: `${realPercent}%` }} className="video-controls__play-line"></div>
                        <img style={{ left: `${scrubberPosition}%` }} className='video-controls__scrubber' src={scrubber} alt="scrubber button" />
                    </div>
                    <p className='video-controls__timer'>
                        <span>{videoPosition}</span>
                        /
                        <span>{videoLength}</span>
                    </p>
                </section>
                <section className='video-controls__shaded'>
                    <img className='video-controls__fullscreen' src={fullscreen} alt="fullscreen button" onClick={() => fullScreenHandler(videoRef, 'full')}/>
                    <img className='video-controls__volume' src={volume} alt="volume button" />
                </section>
            </div>
        </div>
    )
}

export default VideoControls