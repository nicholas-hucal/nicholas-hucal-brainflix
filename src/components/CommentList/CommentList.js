import Comment from '../Comment/Comment';
import Loading from '../Loading/Loading';

function CommentList({ comments, isLoaded }) {
    if (!isLoaded) {
        return (
            <Loading />
        )
    }
    return (
        <section className='comment-list'>
            {comments.map((comment, index, array) => {
                const last = array.length - 1 === index ? 'comment--last' : '';
                return <Comment
                    individualComment={comment}
                    key={comment.timestamp}
                    last={last}
                />
            })}
        </section>
    )
}
export default CommentList;