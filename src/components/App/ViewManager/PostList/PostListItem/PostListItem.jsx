/**
 * @param post:object - data for creating a post item
 */

function PostListItem({post}) {
    return(
         <article>
             <header>
                 <p>{post.id}</p>
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
