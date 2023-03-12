import {Link,Navigate, useParams} from "react-router-dom";
import PostApi from "../../components/API/PostApi";
import {useEffect, useState} from "react";
import {useFetch} from "../../components/App/hooks/useFetch";
import styles from "./PostPage.module.css";
import {CommonButton} from "../../components/UI/Buttons/CommonButton/CommonButton";
import {Loader} from "../../components/UI/Loader/Loader";
import {Author} from "../../components/API/AuthorApi";
import {Comments} from "./Comments/Comments";

function PostPage(){
    const [post,setPost] = useState(null);
    const [author,setAuthor] = useState('Anonymous');

    const {postId} = useParams();
    const Api = new PostApi();
    const AuthorApi = new Author();
    
    const [fetching,isLoading ,error ] = useFetch(async ()=> {
        const post = await Api.getPostById(postId);
        const author = await AuthorApi.getAuthorById(post.userId);
        setPost(post);
        setAuthor(author);
    });

    useEffect(  ()=> {
         fetching()
    },[postId])
    
    return(
        <>
            {(isLoading ) &&
                <Loader/>
            }

            {error &&
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
                                {(author === 'Anonymous' )
                                    ? <p className={styles.author}>Anonymous</p>
                                    : <p className={styles.author}>{author.username}</p>
                                }
                                <Link to={"/react-post-list/posts"}>
                                    <CommonButton value={'Close'}/>
                                </Link>
                            </div>

                        </article>
                    </section>
                    <Comments postId={postId}  />
                </div>
                :
                 null
            }
        </>
    )
}

export default PostPage;
