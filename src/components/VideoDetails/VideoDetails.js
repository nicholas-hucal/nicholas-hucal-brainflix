import './VideoDetails.scss';
import React from 'react';
import viewIcon from '../../assets/images/icons/views.svg';
import likeIcon from '../../assets/images/icons/likes.svg';
import videoDetails from '../../data/video-details.json';


class VideoDetails extends React.Component {
    render() {
        const currentVideo = videoDetails.find(video => video.id === this.props.video.id);

        return (
            <section className='video-details'>
                <h1 className='video-details__title'>{currentVideo.title}</h1>
                <div className='video-details__info'>
                    <div className='video-details__info-start'>
                        <h3 className='video-details__channel'>By {currentVideo.channel}</h3>
                        <p className='video-details__date'>{this.props.dateFunction(currentVideo.timestamp)}</p>
                    </div>
                    <div className='video-details__info-end'>
                        <p className='video-details__views'>
                            <img className='video-details__icon' src={viewIcon} alt="this videos views total" />
                            {currentVideo.views}
                        </p>
                        <p className='video-details__likes'>
                            <img className='video-details__icon' src={likeIcon} alt="this videos likes total" />
                            {currentVideo.likes}
                        </p>
                    </div>
                </div>
                <p className='video-details__description'>
                    {currentVideo.description};
                </p>
            </section>
        );
    }
}

export default VideoDetails;