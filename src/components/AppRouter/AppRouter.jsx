import {Routes, Route} from "react-router-dom";
import App from "../App/App";
import Error from "../../pages/Error/Error";


export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="error" element={<Error/>}/>
        </Routes>
    )
}
