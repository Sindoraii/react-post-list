import {useEffect, useState} from "react";
import Pagination from "./Pagination/Pagination";
import SelectBar from "./SelectBar/SelectBar";

/**
 * @param allPosts:array - posts from a request
 * @param getCurrentPosts:function - callback for setCurrentPost of PostProcessing component
 */
function PostProcessing({allPosts,getCurrentPosts}) {
    const countPosts = allPosts.length;
    const [currentCountPosts,setCurrentCountPosts] = useState(countPosts); //select value

    const totalPages =  Math.ceil(countPosts / currentCountPosts);
    const pages = getArrOfPages(totalPages);
    const [currentPage,setCurrentPage] = useState(pages[0]);

    useEffect(filterPosts,[currentPage,currentCountPosts]);
    /* reset page when select value has changed */
    useEffect(()=> {
         setCurrentPage(pages[0]);
    },[currentCountPosts])


    function getArrOfPages(lastPage) {
        const pages = [];

        for(let i = 1; i <= lastPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    function filterPosts() {
        console.log('cur page',currentPage)
        console.log("select value",currentCountPosts)

        const start = currentPage * currentCountPosts - currentCountPosts;
        const end = currentPage * currentCountPosts ;
        getCurrentPosts(allPosts.slice(start,end))
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
