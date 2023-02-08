import {useState} from "react";
import {Arrow} from "../../../UI/Arrow/Arrow";
import styles from "./SelectBar.module.css";

/**
 * @param totalPosts - number of all count of post
 * @param handler - callback for getting count of current posts to PostProcessing
 */
function SelectBar({totalPosts, handler}) {
    const [active, setActive] = useState(false);
    const values = [50, 25, 10];


    function getCurrentValue(e) {
        if (e.target.value === undefined) {
            handler(totalPosts)
        } else {
            handler(e.target.value)
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
                            <h3>Post count:</h3>
                            <Arrow isActive={active}/>
                        </header>

                        <ul onClick={(e) => {
                            getCurrentValue(e);
                            setActive(false)
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
                            <h3>Post count:</h3>
                            <Arrow isActive={active}/>
                        </header>
                    </div>
                )
            }
        </>
    )
}
export default SelectBar;
