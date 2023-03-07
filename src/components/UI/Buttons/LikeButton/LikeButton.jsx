import {useState} from "react";
import styles from "./LikeButton.module.css";
import unlike from "../../../../assets/icons/like-icon.svg";
import like from "../../../../assets/icons/like-icon-active.svg";


export function LikeButton() {
    const [isLiked,setIsLiked] = useState(unlike);

    function toggleLike() {
        if(isLiked === unlike) {
            return like;
        } else {
            return unlike;
        }
    }

    return(
        <>
            <div className={styles.content}
                onClick={()=> setIsLiked(toggleLike())}>
                <img className={styles.img} src={isLiked} alt="like"/>
            </div>
        </>
    )
}
