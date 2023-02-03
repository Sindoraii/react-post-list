import {useState} from "react";
import Pagination from "./Pagination/Pagination";
import SelectBar from "./SelectBar/SelectBar";

/**
 * @param allPosts:json - posts from a request
 */
function PostProcessing({allPosts,getCurrentPosts}) {
    const countPosts = allPosts.length;
    const selectValue = 10;  //stub values todo
    const totalPages =  Math.ceil(countPosts / selectValue);
    const pages = getArrOfPages(totalPages);

    const [currentPosts,setCurrentPosts] = useState(allPosts);
    const [currentPage,setCurrentPage] = useState(pages[0]);
    const [currentCountPosts,setCurrentCountPosts] = useState(countPosts)

console.log('currentCountPosts',currentCountPosts)
console.log('currentPage',currentPage)
console.log('select value',currentCountPosts)

    function getArrOfPages(max) {
        const pages = [];

        for(let i = 1; i <= max; i++) {
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
