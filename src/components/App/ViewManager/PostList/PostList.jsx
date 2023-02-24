import PostListItem from "./PostListItem/PostListItem";

/**
 * @param currentPosts:array - array consists of objects which include info for creating the post
 */
function PostList({currentPosts}) {
    return (
       <>
           <section>
               {currentPosts.map((post) => <PostListItem key={post.id} post={post}/>)}
           </section>
       </>
    )
}

export default PostList;
