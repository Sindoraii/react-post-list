import {Link,Navigate, useParams} from "react-router-dom";
import PostApi from "../../components/API/PostApi";
import {useEffect, useState} from "react";
import {useFetch} from "../../components/App/hooks/useFetch";
import styles from "./PostPage.module.css";
import {CommonButton} from "../../components/UI/Buttons/CommonButton/CommonButton";
import {Loader} from "../../components/UI/Loader/Loader";
import {Author} from "../../components/API/AuthorApi";

function PostPage(){
    const [post,setPost] = useState(null);
    const [author,setAuthor] = useState(null);

    const {postId} = useParams();
    const Api = new PostApi();
    const AuthorApi = new Author();
    
    const [fetchPost,isLoadingPost,errorPost] = useFetch(async ()=> {
        const post = await Api.getPostById(postId)
        setPost(post);
    });
    const [fetchAuthor,isLoadingAuthor,errorAuthor] = useFetch( async ()=>{
        const author = await AuthorApi.getAuthorById(postId);
        setAuthor(author);
    })
    
    
    useEffect(()=> {
        fetchPost()
        fetchAuthor()
    },[postId])
    
    return(
        <>
            {(isLoadingPost || isLoadingAuthor) &&
                <Loader/>
            }
            {errorPost &&
               <Navigate replace to={"/notFound"}/>
            }

            {post !== null
                ?
                <div className={styles.container}>
                    <h1 className={styles.titlePage}>Post page</h1>
                    <section className={styles.post}>
                        <article>
                            <h2 className={styles.title}>POST #{post.id} {post.title}</h2>
                            <p>{post.body}</p>
                            <div className={styles.wrapper}>
                                {(author === null) || errorAuthor
                                    ? <p className={styles.author}>Anonymous</p>
                                    : <p className={styles.author}>{author.username}</p>
                                }
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
