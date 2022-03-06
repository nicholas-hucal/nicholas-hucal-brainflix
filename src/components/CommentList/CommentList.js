import Comment from '../Comment/Comment';
import { v4 as uuidv4 } from 'uuid';

function CommentList({ comments, isLoaded, deleteComment, video }) {
    const allComments = comments.length > 1 ? comments : Array.from(Array(3), () => []);

    return (
        <section className='comment-list'>
            {allComments.map((comment, index, array) => {
                const last = array.length - 1 === index ? 'comment--last' : '';

                return <Comment
                    individualComment={comment}
                    key={uuidv4()}
                    last={last}
                    isLoaded={isLoaded}
                    deleteComment={deleteComment}
                    video={video}
                />
            })}
        </section>
    )
}
export default CommentList;