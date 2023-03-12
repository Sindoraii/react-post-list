export async function getAllComments() {
    let data = null;
    await fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res)=> {
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Request status is ${res.status}`)
                }
            })
            .then((comments)=> {
                data = comments;
            })
    return data;
}
