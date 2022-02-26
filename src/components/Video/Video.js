import './Video.scss'

function Video({ video, clickHandler }) {
    const { id, title, channel, image } = video;
    return (
        <article className='video' onClick={() => clickHandler(id)}>
            <div className='video__image-container'>
                <img className='video__image' src={image} alt={title} />
            </div>
            <div className='video__details'>
                <p className='video__title'>{title}</p>
                <p className='video__channel'>{channel}</p>
            </div>
        </article>
    )
}

export default Video