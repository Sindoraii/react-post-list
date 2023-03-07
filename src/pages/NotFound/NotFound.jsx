import styles from "./NotFound.module.css";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>Error 404: Page is not found</h1>
            <div className={styles.subtitle}>
                <p>There`s nothing here... Please try to go</p>
                <Link to="/">home</Link>
            </div>
        </>
    )
}
export default NotFound;
