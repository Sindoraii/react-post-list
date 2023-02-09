import PostApi from "../API/PostApi";
import {useEffect, useState} from "react";
import PostProcessing from "./PostProcessing/PostProcessing";
import ViewManager from "./ViewManager/ViewManager";
import styles from "./App.module.css";

function App() {
    const servicePosts = new PostApi();
    const [allPosts,setAllPosts] = useState([]);
    const [currentPosts,setCurrentPosts] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=> {
        async function fetchPosts() {
            const request = await servicePosts.getPosts();

            if(request.message === undefined) {
                setAllPosts(request);
            } else {
               setError(request.message);
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


    /* rendering */
    if(allPosts.length !== 0) {
        return (
            <main className={styles.content}>
                <PostProcessing allPosts={allPosts} getCurrentPosts={currentPostsHandler}/>
                <ViewManager currentPosts={currentPosts}/>
            </main>
           )
        } else {
           return(
               <ViewManager  currentPosts={[]} error={error}/>
           )
    }
}

export default App;
