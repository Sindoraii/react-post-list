import styles from "./commonButton.module.css";

export function CommonButton({value}) {
        return(
            <button type="button" className={styles.button}>{value}</button>
        )
}
