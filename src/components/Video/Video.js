import './Video.scss'
import { Link } from 'react-router-dom';

function Video({ video }) {
    const { id, title, channel, image } = video;
    return (

        <Link to={`/${id}`} className='video'>
            <div className='video__image-container'>
                <img className='video__image' src={image} alt={title} />
            </div>
            <div className='video__details'>
                <p className='video__title'>
                    <span className='video__title-content video__title-content--full'>
                        {title}
                    </span>
                    <span className='video__title-content video__title-content--truncate'>
                        {title.substr(0, 33) + "\u2026"}
                    </span>
                </p>
                <p className='video__channel'>{channel}</p>
            </div>
        </Link>
    )
}

export default Video