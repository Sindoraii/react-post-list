import {Link} from "react-router-dom";
import style from "./Main.module.css";

function Main() {
    return(
        <section className={style.container}>
            <h1>Welcome to the club...</h1>
            <Link to="posts" style={{textDecoration:'none'}}>
                <div className={style.link}>Get posts</div>
            </Link>
        </section>
    )
}

export default Main;
