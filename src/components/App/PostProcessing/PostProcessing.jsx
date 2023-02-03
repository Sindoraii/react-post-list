import {useState} from "react";
import Pagination from "./Pagination/Pagination";
/**
 * @param allPosts:json - posts from a request
 */
function PostProcessing({allPosts}) {
    const [currentPosts,setCurrentPosts] = useState(allPosts);
    const countPosts = allPosts.length;
    const selectValue = 10;  //stub values todo
    const totalPages =  Math.ceil(countPosts / selectValue);

    const getArrOfPages = (max) => {
        const pages = [];

        for(let i = 1; i <= max; i++) {
            pages.push(i);
        }
        return pages;
    }


    return(
        <Pagination pages={getArrOfPages(totalPages)} />
    )
}
export default PostProcessing;
