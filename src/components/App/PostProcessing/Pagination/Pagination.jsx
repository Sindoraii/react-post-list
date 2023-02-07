import {CommonButton} from "../../../UI/Buttons/CommonButton/CommonButton";
import styles from "./Pagination.module.css";

/**
 * @param pages:array - array with page numbers
 **/
function Pagination({pages,getCurrentPage}) {
    const buttonList = pages.map((number) => <CommonButton value={number} key={number}/> )

    return (
        <div className={styles.container}
            onClick={getCurrentPage}>
            {buttonList}
        </div>
    )
}

export default Pagination;
