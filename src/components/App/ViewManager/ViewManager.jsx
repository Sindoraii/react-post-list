import PostList from "./PostList/PostList";

/***
 * @param currentPosts:array - array consists of objects which include info for creating the post
 */
function ViewManager({currentPosts}) {

    return (
        <PostList currentPosts={currentPosts}/>
    )
}

export default ViewManager;
