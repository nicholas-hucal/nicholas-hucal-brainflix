import './Video.scss';
import { Link } from 'react-router-dom';

function Video({ video, isLoaded }) {
    const { id, title, channel, image } = video;

    return (
        <Link to={`/videos/${id || ''}`} className='video'>
            <div className={`video__image-container ${isLoaded ? '' : 'video__image-container--loading'}`}>
                <img className={`video__image ${isLoaded ? '' : 'video__image--loading'}`} src={image} alt={title} />
            </div>
            <div className='video__details'>
                <p className={`video__title ${isLoaded ? '' : 'video__title--loading'}`}>
                    <span className='video__title-content video__title-content--full'>
                        {title}
                    </span>
                    <span className='video__title-content video__title-content--truncate'>
                        {title && title.substr(0, 33) + "\u2026"}
                    </span>
                </p>
                <p className={`video__channel ${isLoaded ? '' : 'video__channel--loading'}`}>{channel}</p>
            </div>
        </Link>
    )
}

export default Video;