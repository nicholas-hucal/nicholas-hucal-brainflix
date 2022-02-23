import './VideoHero.scss';

function VideoHero(props) {
    return (
        <div className='video-hero'>
            <section className='video-hero__container'>
                <video className='video-hero__video' controls poster={props.posterSrc}>
                    <source src={props.videoSrc} type={props.videoType} />
                </video>
            </section>
        </div>
    )
}

export default VideoHero