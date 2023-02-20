import PostApi from "../API/PostApi";
import {useEffect, useState} from "react";
import PostProcessing from "./PostProcessing/PostProcessing";
import ViewManager from "./ViewManager/ViewManager";
import styles from "./App.module.css";
import {Outlet} from "react-router-dom";
import {useFetch} from "./hooks/useFetch";

function App() {
    const servicePosts = new PostApi();
    const [allPosts, setAllPosts] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [fetchPosts, isLoading, error] = useFetch(async () => {
        const posts = await servicePosts.getPosts();
        setAllPosts(posts);
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    /**
     * @param posts:array -  posts for showing
     */
    function currentPostsHandler(posts) {
        setCurrentPosts(posts)
    }

    return (
        <>
            {allPosts.length !== 0 &&
                <>
                    <main className={styles.content}>
                        <PostProcessing allPosts={allPosts} getCurrentPosts={currentPostsHandler}/>
                        <ViewManager currentPosts={currentPosts}/>
                    </main>
                    <Outlet/>
                </>
            }

            {error &&
                <ViewManager currentPosts={[]} error={error}/>
            }

            {isLoading &&
                <h1>LOADING...</h1>
            }
        </>
    )
}

export default App;
