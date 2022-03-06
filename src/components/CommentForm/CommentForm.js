import './CommentForm.scss';
import fields from '../../utils/fields';
import buttonImg from '../../assets/images/icons/add_comment.svg';
import avatarImg from '../../assets/images/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import Inputs from '../Inputs/Inputs';
import Avatar from '../Avatar/Avatar';

function CommentForm() {
    const handleForm = (event) => {
        event.preventDefault();
    }

    return (
        <section className='comment-form'>
            <div className='comment-form__form-container'>
                <Avatar image={avatarImg} alt="avatar for user mohan" parentClass='comment-form__avatar' imgClass='comment-form__avatar-image'/>
                <form className='comment-form__form' onSubmit={handleForm}>
                    <Inputs field={fields.home[0]} key={fields.home[0].id} handleChange={console.log} />
                    <Button
                        className="comment-form__submit"
                        image={buttonImg}
                        text="comment"
                        type="submit"
                        disable={true}
                    />
                </form>
            </div>
        </section>
    )
}

export default CommentForm