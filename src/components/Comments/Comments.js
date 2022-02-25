import './Comments.scss';
import buttonImg from '../../assets/images/icons/add_comment.svg';
import avatar from '../../assets/images/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import Comment from '../Comment/Comment';

function Comments({comments, dateFunction}) {
    return (
        <section className='comments'>
            <h3 className='comments__heading'>{comments.length} Comments</h3>
            <div className='comments__form-container'>
                <figure className='comments__avatar-container'>
                    <img className='comments__avatar' src={avatar} alt="avatar for Mohan Muruge"/>
                </figure>
                <form className='comments__form'>
                    <h5 className='comments__form-heading'>Join the conversation</h5>
                    <textarea className='comments__textarea' name="comment" placeholder='Add a new comment'></textarea>
                    <Button 
                        className="comments__submit"
                        image={buttonImg}
                        text="COMMENT"
                        type="submit"
                        />
                </form>
            </div>
            <section>
               {comments.map(comment => <Comment individualComment={comment} dateFunction={dateFunction} key={comment.timestamp}/>)}
            </section>
        </section>
    )
}
export default Comments;