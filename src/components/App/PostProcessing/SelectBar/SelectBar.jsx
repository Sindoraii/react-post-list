import {useEffect, useState} from "react";
import {Arrow} from "../../../UI/Arrow/Arrow";
import styles from "./SelectBar.module.css";

/**
 * @param totalPosts - number of all count of post
 * @param handler - callback for getting count of current posts to PostProcessing
 */
function SelectBar({totalPosts, handler}) {
    const [active, setActive] = useState(false);
    const values = [50, 25, 10];
    const [countPostsPerPage, setCountPostsPerPage] = useState(totalPosts);

    useEffect(() => {
        handler(countPostsPerPage);
    }, [countPostsPerPage]);


    function handleSelectBar(e) {
        if (e.target.value === undefined) {
            setCountPostsPerPage(totalPosts);
        } else {
            setCountPostsPerPage(e.target.value);
        }
    }


    return (
        <>
            {active ?
                (
                    <div className={styles.select}>
                        <header className={styles.header}
                                onClick={() => {
                                    active ? setActive(false) : setActive(true)
                                }}>
                            <h3>Posts per page: {countPostsPerPage}</h3>
                            <Arrow isActive={active}/>
                        </header>
                        <p className={styles.countPosts}>Count posts: {totalPosts}</p>
                        <ul className={styles.list}
                            onClick={(e) => {
                                handleSelectBar(e);
                                setActive(false);
                            }}>
                            <li className={styles.item} value={totalPosts}>{totalPosts}</li>
                            {values.map((value) => <li key={value} className={styles.item} value={value}>{value}</li>)}
                        </ul>
                    </div>
                ) : (
                    <div className={styles.select}>
                        <header className={styles.header}
                                onClick={() => {
                                    active ? setActive(false) : setActive(true)
                                }}>
                            <h3>Posts per page: {countPostsPerPage}</h3>
                            <Arrow isActive={active}/>
                        </header>
                        <p className={styles.countPosts}>Count posts: {totalPosts}</p>
                    </div>
                )
            }
        </>
    )
}

export default SelectBar;
