import './Comment.scss';
import { format } from 'timeago.js';
import Avatar from '../Avatar/Avatar.js';

function Comment({ individualComment, last, isLoaded, deleteComment, video }) {
    const { id, name, timestamp, comment, likes } = individualComment;
    return (
        <article className={`comment ${last}`} data-likes={likes}>
            <div className='comment__delete' onClick={() => deleteComment(id, video.id)}>x</div>
            <Avatar image={null} imgClass="comment__avatar-image" parentClass="comment__avatar" />
            <section className='comment__info'>
                <div className='comment__details'>
                    <p className={`comment__name ${isLoaded ? '' : 'comment__name--loading'}`}>
                        {name}
                    </p>
                    <p className={`comment__date ${isLoaded ? '' : 'comment__date--loading'}`}>
                        <time className={`comment__time ${isLoaded ? '' : 'comment__time--loading'}`}>
                            {timestamp ? format(timestamp) :  'just now'}
                        </time>
                    </p>
                </div>
                <p className={`comment__comment ${isLoaded ? '' : 'comment__comment--loading'}`}>
                    {comment}
                </p>
            </section>    
        </article>
    );
}

export default Comment;
