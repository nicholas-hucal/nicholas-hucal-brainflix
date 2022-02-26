import Comment from '../Comment/Comment';

function CommentList({ comments, dateFunction }) {
    return (
        <section className='comment-list'>
            {comments.map((comment, index, array) => {
                const last = array.length - 1 === index ? 'comment--last' : '';
                return <Comment
                    individualComment={comment}
                    dateFunction={dateFunction}
                    key={comment.timestamp}
                    last={last}
                />
            })}
        </section>
    )
}
export default CommentList;