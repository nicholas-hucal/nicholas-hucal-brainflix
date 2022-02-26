import React from 'react'
import './Video.scss'

function Video({ video }) {
    const { id, title, channel, image } = video;

    function truncateText(text, length) {
        return text.length <= length ? text : text.substr(0, length) + '\u2026';
    }

    return (
        <article className='video'>
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