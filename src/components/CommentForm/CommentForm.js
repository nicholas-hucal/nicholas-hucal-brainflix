import './CommentForm.scss'
import buttonImg from '../../assets/images/icons/add_comment.svg';
import avatar from '../../assets/images/images/Mohan-muruge.jpg';
import Button from '../Button/Button';

function CommentForm({commentsCount}) {
  return (
    <section className='comment-form'>
        <h2 className='comment-form__heading'>{commentsCount} Comments</h2>
        <div className='comment-form__form-container'>
            <figure className='comment-form__avatar-container'>
                <img className='comment-form__avatar' src={avatar} alt="avatar for Mohan Muruge" />
            </figure>
            <form className='comment-form__form'>
                <h3 className='comment-form__form-heading'>Join the conversation</h3>
                <textarea className='comment-form__textarea' name="comment" placeholder='Add a new comment'></textarea>
                <Button
                    className="comment-form__submit"
                    image={buttonImg}
                    text="comment"
                    type="submit"
                />
            </form>
        </div>
    </section>
  )
}

export default CommentForm