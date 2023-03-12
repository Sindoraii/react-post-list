import styles from "./PostListItem.module.css"
import {LikeButton} from "../../../../UI/Buttons/LikeButton/LikeButton";
import {Link} from "react-router-dom";

/**
 * @param post:object - data for creating a post item
 */
function PostListItem({post}) {
    return(
         <article className={styles.content}>
             <header className={styles.header}>
                 <p className={styles.number}>#{post.id}</p>
                 <h2 className={styles.title}>{post.title}</h2>
             </header>
             <div>
                 <p>{post.body}</p>
             </div>
             <footer className={styles.footer}>
                 <Link
                     to={`/react-post-list/posts/${post.id}/comments`}
                 >Comments</Link>
                 <Link to={`${post.id}`} >Open</Link>
                 <LikeButton/>
             </footer>
         </article>
    )
}
export default PostListItem;
