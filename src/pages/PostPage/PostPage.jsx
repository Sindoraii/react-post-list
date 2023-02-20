import {Link,Navigate, useParams} from "react-router-dom";
import PostApi from "../../components/API/PostApi";
import {useEffect, useState} from "react";
import {useFetch} from "../../components/App/hooks/useFetch";
import styles from "./PostPage.module.css";
import {CommonButton} from "../../components/UI/Buttons/CommonButton/CommonButton";

function PostPage(){
    const {postId} = useParams();
    const Api = new PostApi();
    const [fetchPost,isLoading,error] = useFetch(async ()=> {
        const post = await Api.getPostById(postId)
        setPost(post);
    });

    const [post,setPost] = useState(null);

    useEffect(()=> {
        fetchPost()
    },[postId])
    
    return(
        <>
            {isLoading &&
                <h1>LOADING...</h1>
            }
            {error &&
               <Navigate replace to={"/notFound"}/>
            }

            { post !== null
                ?
                <div className={styles.container}>
                    <h1 className={styles.titlePage}>Post page</h1>
                    <section className={styles.post}>
                        <article>
                            <h2 className={styles.title}>POST #{post.id} {post.title}</h2>
                            <p>{post.body}</p>
                            <div className={styles.wrapper}>
                                <p>Author</p>
                                <Link to={"/posts"}>
                                    <CommonButton value={'Close'}/>
                                </Link>
                            </div>

                        </article>
                    </section>
                </div>
                :
                 null
            }
        </>
    )
}

export default PostPage;
