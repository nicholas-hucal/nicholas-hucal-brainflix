import './Comment.scss';
import * as utils from '../../utils/utils.js';

function Comment({ individualComment, last }) {
    const { name, timestamp, comment, likes } = individualComment;
    return (
        <article className={`comment ${last}`} data-likes={likes}>
            <figure className='comment__avatar-container'>
                <div className='comment__avatar comment__avatar--no-image'></div>
            </figure>
            <section className='comment__info'>
                <div className='comment__details'>
                    <p className='comment__name'>
                        {name}
                    </p>
                    <p className='comment__date'>
                        <time>
                            {utils.createHumanReadableDate(timestamp)}
                        </time>
                    </p>
                </div>
                <p className='comment__comment'>
                    {comment}
                </p>
            </section>
        </article>
    );
}

export default Comment;
