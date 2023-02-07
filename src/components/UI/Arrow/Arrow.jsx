import styles from "./Arrow.module.css";

export function Arrow({isActive}){
    return(
        <div className={isActive ? styles.arrowInactive :styles.arrowActive}/>
    )
}
