import './VideoDetails.scss';
import viewIcon from '../../assets/images/icons/views.svg';
import likeIcon from '../../assets/images/icons/likes.svg';
import Comments from '../../components/Comments/Comments';

function VideoDetails({ video, dateFunction }) {
    const { title, channel, timestamp, views, likes, description, comments } = video;
    return (
        <>
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
            <Comments comments={comments} dateFunction={dateFunction}/>
        </>
    );
}

export default VideoDetails;