import {useState} from "react";
import Pagination from "./Pagination/Pagination";
import SelectBar from "./SelectBar/SelectBar";

/**
 * @param allPosts:json - posts from a request
 */
function PostProcessing({allPosts,getCurrentPosts}) {
    const countPosts = allPosts.length;
    const [currentPosts,setCurrentPosts] = useState(allPosts);
    const [currentCountPosts,setCurrentCountPosts] = useState(countPosts); //select value

    const totalPages =  Math.ceil(countPosts / currentCountPosts);
    const pages = getArrOfPages(totalPages);
    const [currentPage,setCurrentPage] = useState(pages[0]);


    function getArrOfPages(lastPage) {
        const pages = [];

        for(let i = 1; i <= lastPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    function handlerCurrentPage(e) {
        if(e.target.className === 'numberPage') {
            setCurrentPage(e.target.textContent)
        }
    }

    function handlerSelectValue(e) {
        if(e.target.closest('.selectBar') && !e.target.disabled) {
            setCurrentCountPosts(Number(e.target.value))
        }
    }


    return(
        <>
            <SelectBar
                totalPosts={countPosts}
                handler={handlerSelectValue}
            />
            <Pagination
                getCurrentPage = {(e)=> handlerCurrentPage(e)}
                pages={pages}
            />
        </>

    )
}
export default PostProcessing;
