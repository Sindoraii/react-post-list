import PostApi from "../API/PostApi";
import {useEffect, useState} from "react";
import PostProcessing from "./PostProcessing/PostProcessing";

function App() {
    const servicePosts = new PostApi();
    const [allPosts,setAllPosts] = useState([]);

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

    /* rendering */
    if(allPosts.length !== 0) {
           return  <PostProcessing allPosts={allPosts} />
        }
}

export default App;
