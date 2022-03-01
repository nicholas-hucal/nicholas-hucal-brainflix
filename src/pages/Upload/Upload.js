import Button from '../../components/Button/Button'
import './Upload.scss'
import publishImg from '../../assets/images/icons/publish.svg'
import thumbImg from '../../assets/images/images/Upload-video-preview.jpg'

const Upload = props => {
    return (
        <section className='app__container'>
            <main className='video-upload'>
                <h1 className='video-upload__heading'>Upload Video</h1>
                <form className='video-upload__form'>
                    <div className='video-upload__form-inputs'>
                        <div className='video-upload__form-start'>
                            <label className='video-upload__label'>
                                Video Thumbnail
                                <img className='video-upload__thumbnail' src={thumbImg} alt="video to upload" />
                            </label>
                        </div>
                        <div className='video-upload__form-end'>
                            <label className='video-upload__label'>
                                Title Your Video
                                <input className='video-upload__input-title' type="text" name="title" placeholder="Add a title to your video" />
                            </label>
                            <label className='video-upload__label'>
                                Add a video description
                                <textarea className='video-upload__input-description' type="text" name="title" placeholder="Add a title to your video"></textarea>
                            </label>
                        </div>
                    </div>
                    <div className='video-upload__buttons'>
                        <Button
                            className="video-upload__submit"
                            image={publishImg}
                            text="publish"
                            type="submit"
                        />
                        <Button
                            className="video-upload__cancel"
                            text="cancel"
                            type="cancel"
                        />
                    </div>
                </form>
                

            </main>
        </section>
    )
}
export default Upload