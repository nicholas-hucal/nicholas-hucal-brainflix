import './VideoDetails.scss';
import { format } from 'timeago.js';
import viewIcon from '../../assets/images/icons/views.svg';
import likeIcon from '../../assets/images/icons/likes.svg';

function VideoDetails({ video, isLoaded, updateLikes, liked, played }) {
    const { id, title, channel, timestamp, views, likes, description, comments } = video;
  
    return (
        <section className='video-details'>
            <h1 className={`video-details__title ${isLoaded ? '' : 'video-details__title--loading'}`}>{title}</h1>
            <div className='video-details__info'>
                <div className='video-details__info-start'>
                    <h3 className='video-details__channel'>By {channel ? channel : 'channel'}</h3>
                    <p className='video-details__date'><time>{timestamp ? format(timestamp) : 'some time ago'}</time></p>
                </div>
                <div className='video-details__info-end'>
                    <p className='video-details__views'>
                        <img
                            className={`video-details__icon ${played && 'video-details__icon--active'}`}
                            src={viewIcon}
                            alt={`this videos views total is ${views}`}
                        />
                        {views}
                    </p>
                    <p className='video-details__likes'>
                        <img
                            className={`video-details__icon ${liked && 'video-details__icon--active'}`}
                            src={likeIcon}
                            alt={`this videos likes total is ${likes}`}
                            onClick={(e) => updateLikes(id)}
                        />
                        {likes}
                    </p>
                </div>
            </div>
            <p className={`video-details__description ${isLoaded ? '' : 'video-details__description--loading'}`}>
                {description}
            </p>
            <h2 className='comment-form__heading'>{comments && comments.length} Comments</h2>
        </section>
    );
}

export default VideoDetails;