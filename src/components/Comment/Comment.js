import './Comment.scss';

function Comment(props) {
    return (
        <article className='comment'>
            <figure className='comment__avatar-container'>
                <div className='comment__avatar comment__avatar--no-image'></div>
            </figure>
            <section className='comment__info'>
                <div className='comment__details'>
                    <p className='comment__name'>
                        Nick
                    </p>
                    <p className='comment__date'>
                        02/02/2022
                    </p>
                </div>
                <p className='comment__comment'>
                    Here goes the comment details and content
                </p>
            </section>
        </article>
    );
}

export default Comment;
