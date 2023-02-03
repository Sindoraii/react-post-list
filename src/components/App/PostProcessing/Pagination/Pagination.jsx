/**
 * @param pages:array - array with page numbers
 **/
function Pagination({pages}) {
    const buttonList = pages.map((number) => <button type="button" key={number}>{number}</button>)

    return (
        <div>
            {buttonList}
        </div>
    )
}

export default Pagination;
