import './VideoHero.scss';

function VideoHero({ posterSrc, videoSrc, videoType }) {
    return (
        <div className='video-hero'>
            <section className='video-hero__container'>
                <video className='video-hero__video' controls poster={posterSrc}>
                    <source src={videoSrc} type={videoType} />
                </video>
            </section>
        </div>
    )
}

export default VideoHero