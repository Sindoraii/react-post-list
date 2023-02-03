/**
 * @param totalPosts - number of all count of post
 * @param handler - callback for getting count of current post to PostProcessing
 */
function SelectBar({totalPosts,handler}) {

    return(
        <>
            <select className='selectBar'
                onClick={(e)=>handler(e)}>
                <option disabled>Post count:</option>
                <option>{String(totalPosts)}</option>
                <option>50</option>
                <option>25</option>
                <option>10</option>
            </select>
        </>
    )
}
export default SelectBar;
