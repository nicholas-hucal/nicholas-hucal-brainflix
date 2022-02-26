import './CommentsList.scss';
import Comment from '../Comment/Comment';

function CommentsList({ comments, dateFunction }) {
    return (
        <section className='comments-list'>
            {comments.map((comment, index, array) => {
                const last = array.length - 1 === index ? 'comment--last' : '';
                return <Comment individualComment={comment} dateFunction={dateFunction} key={comment.timestamp} last={last}/>
            })}
        </section>
    )
}
export default CommentsList;