import './VideoHero.scss';

function VideoHero({ posterSrc, videoSrc, videoType }) {
    return (
        <section className='video-hero'>
            <div className='video-hero__container'>
                <video className='video-hero__video' controls poster={posterSrc}>
                    <source src={videoSrc} type={videoType} />
                </video>
            </div>
        </section>
    )
}

export default VideoHero