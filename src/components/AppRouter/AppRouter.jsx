import {Routes, Route} from "react-router-dom";
import App from "../App/App";
import NotFound from "../../pages/NotFound/NotFound";
import Main from "../../pages/Main/Main";
import PostPage from "../../pages/PostPage/PostPage";

export function AppRouter() {

    return (
        <Routes>
            <Route path="/react-post-list" element={<Main/>} />
            <Route path="/react-post-list/posts" element={<App/>}/>
            <Route path="/react-post-list/posts/:postId" element={<PostPage/>}>
                <Route path={"comments"} element ={<PostPage/>}/>
            </Route>

            <Route path="notFound" element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
