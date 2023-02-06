import PostApi from "../API/PostApi";
import {useEffect, useState} from "react";
import PostProcessing from "./PostProcessing/PostProcessing";

function App() {
    const servicePosts = new PostApi();
    const [allPosts,setAllPosts] = useState([]);
    const [currentPosts,setCurrentPosts] = useState([]);

    useEffect(()=> {
        async function fetchPosts() {
            const request = await servicePosts.getPosts();
            if(request.message === undefined) {
                setAllPosts(request);
            } else {
                console.log('ERROR',request.message) // todo for ErrorPage
            }
        }
        fetchPosts();
    },[]);


    /**
     * @param posts:array -  posts for showing
     */
    function currentPostsHandler(posts){
        setCurrentPosts(posts)
    }
    console.log('SHOWING POSTS',currentPosts)

    /* rendering */
    if(allPosts.length !== 0) {
           return  <PostProcessing allPosts={allPosts}
                    getCurrentPosts={currentPostsHandler}
           />
        }
}

export default App;
