import styles from "./PostListItem.module.css"

/**
 * @param post:object - data for creating a post item
 */
function PostListItem({post}) {
    return(
         <article className={styles.content}>
             <header className={styles.header}>
                 <p className={styles.number}>#{post.id}</p>
                 <h2>{post.title}</h2>
             </header>
             <div>
                 <p>{post.body}</p>
             </div>
             <footer>
                 <a href="">Comments</a>
                 <button type="button">Like</button>
             </footer>
         </article>
    )
}
export default PostListItem;
