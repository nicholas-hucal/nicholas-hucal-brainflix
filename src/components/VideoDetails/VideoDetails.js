import './VideoDetails.scss';
import React from 'react';
import viewIcon from '../../assets/images/icons/views.svg';
import likeIcon from '../../assets/images/icons/likes.svg';
import videoDetailsJson from '../../data/video-details.json';


class VideoDetails extends React.Component {
    render() {
        const { dateFunction, video : currentVideo } = this.props;
        const { title, channel, timestamp, views, likes, description } = videoDetailsJson.find(video => video.id === currentVideo.id);

        return (
            <section className='video-details'>
                <h1 className='video-details__title'>{title}</h1>
                <div className='video-details__info'>
                    <div className='video-details__info-start'>
                        <h3 className='video-details__channel'>By {channel}</h3>
                        <p className='video-details__date'>{dateFunction(timestamp)}</p>
                    </div>
                    <div className='video-details__info-end'>
                        <p className='video-details__views'>
                            <img
                                className='video-details__icon'
                                src={viewIcon}
                                alt={`this videos views total is ${views}`} 
                                />
                            {views}
                        </p>
                        <p className='video-details__likes'>
                            <img
                                className='video-details__icon'
                                src={likeIcon}
                                alt={`this videos likes total is ${likes}`} 
                                />
                            {likes}
                        </p>
                    </div>
                </div>
                <p className='video-details__description'>
                    {description};
                </p>
            </section>
        );
    }
}

export default VideoDetails;