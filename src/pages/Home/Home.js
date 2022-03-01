import VideoHero from '../../components/VideoHero/VideoHero';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';
import VideoList from '../../components/VideoList/VideoList';
import * as Utils from '../../utils/Utils.js';

const Home = ({currentVideo, filteredVideos, updateCurrentVideo}) => {
    return (
        <>
            <VideoHero videoSrc="" videoType="" posterSrc={currentVideo.image} />
            <section className='app__container'>
                <main>
                    <VideoDetails video={currentVideo} dateFunction={Utils.createHumanReadableDate} />
                    <CommentForm commentsCount={currentVideo.comments.length} />
                    <CommentList comments={currentVideo.comments} dateFunction={Utils.createHumanReadableDate} />
                </main>
                <aside>
                    <VideoList videos={filteredVideos} clickHandler={updateCurrentVideo} />
                </aside>
            </section>
        </>
    )
}

export default Home;