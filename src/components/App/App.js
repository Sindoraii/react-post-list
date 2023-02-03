import PostApi from "../API/PostApi";
import {useEffect, useState} from "react";

function App() {
    const servicePosts = new PostApi();
    const [posts,setPosts] = useState(null);

    useEffect(()=> {
        async function fetchPosts() {
            const request = await servicePosts.getPosts();
            if(request.message === undefined) {
                setPosts(request);
            } else {
                console.log('ERROR',request.message) // todo for ErrorPage
            }
        }
        fetchPosts();
    },[]);

}

export default App;
