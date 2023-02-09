import styles from "./Error.module.css";

function Error() {
    return (
        <>
            <h1>Error 404: Page is not found</h1>
            <p className={styles.subTitle}>There`s nothing here...</p>
        </>
    )
}
export default Error;
