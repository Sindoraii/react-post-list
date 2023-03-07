import PostList from "./PostList/PostList";
import ErrorView from "./ErrorView/ErrorView";

/**
 * @param currentPosts:array - array consists of objects which include info for creating the post
 * @param error:string - request message about error
 */
function ViewManager({currentPosts,error}) {
    return (
        <>
            {error ? <ErrorView message={error}/> : <PostList currentPosts={currentPosts}/> }
        </>
    )
}

export default ViewManager;
