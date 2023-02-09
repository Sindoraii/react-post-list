import {Routes, Route} from "react-router-dom";
import App from "../App/App";
import NotFound from "../../pages/NotFound/NotFound";
import Main from "../../pages/Main/Main";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="posts" element={<App/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
