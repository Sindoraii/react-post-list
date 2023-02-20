export class Author {
    async getAuthorById(id) {
        let author = null;
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=>{
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Request status is ${res.status}`)
                }
            })
            .then((user)=> author = user)
        return author;
    }
}
