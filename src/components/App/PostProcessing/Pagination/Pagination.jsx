/**
 * @param pages:array - array with page numbers
 **/
function Pagination({pages,getCurrentPage}) {
    const buttonList = pages.map((number) => <button type="button" key={number} className="numberPage">{number}</button>)

    return (
        <div onClick={getCurrentPage}>
            {buttonList}
        </div>
    )
}

export default Pagination;
