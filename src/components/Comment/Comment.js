import './Comment.scss';
import { format } from 'timeago.js';

function Comment({ individualComment, last, isLoaded }) {
    const { name, timestamp, comment, likes } = individualComment;
    return (
        <article className={`comment ${last}`} data-likes={likes}>
            <figure className='comment__avatar-container'>
                <div className='comment__avatar comment__avatar--no-image'></div>
            </figure>
            <section className='comment__info'>
                <div className='comment__details'>
                    <p className={`comment__name ${isLoaded ? '' : 'comment__name--loading'}`}>
                        {name}
                    </p>
                    <p className={`comment__date ${isLoaded ? '' : 'comment__date--loading'}`}>
                        <time>
                            {timestamp && format(timestamp)}
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
