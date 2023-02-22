import {useFetch} from "../../../components/App/hooks/useFetch";
import {getAllComments} from "../../../components/API/CommentApi";
import {useEffect, useState} from "react";
import {Loader} from "../../../components/UI/Loader/Loader";
import styles from "./Comments.module.css";

export function Comments({postId}) {
    const [comments,setComments] = useState([]);
    const [fetchComments, isLoadingComments,  errorComments] = useFetch(async () => {
        const data = await getAllComments();
        const filteredData = data.filter((comment)=> comment.postId === Number(postId));
        setComments(filteredData);
    });

    useEffect(()=>{
        fetchComments()
    }, [])


    return (
        <>
            {isLoadingComments &&
                <Loader/>
            }
            {
                errorComments &&
                <h2>Comments are not found</h2>
            }
            {
                <section className={styles.container}>
                    <h2 className={styles.title}>Comments:</h2>
                    {comments.map((comment) => (
                        <article key={comment.id}>
                            <h3>{comment.email}</h3>
                            <p>{comment.body}</p>
                        </article>
                    ))}
                </section>
            }

        </>
    )
}
