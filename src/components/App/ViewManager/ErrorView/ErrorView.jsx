import styles from "./ErrorView.module.css";

/**
 * @param message:string - request message about error
 */
function ErrorView({message}) {
    return(
        <>
            <h1>{message}</h1>
            <p className={styles.subTitle}>Something is going wrong at the server side...</p>
        </>
    )
}
export default ErrorView;
