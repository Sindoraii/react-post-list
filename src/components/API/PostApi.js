export class PostApi {

    async getPosts() {
        let posts = null;

        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                if(res.ok){
                    return res.json();
                } else {
                    return new Error(`Request status is ${res.status}`)
                }
            })
            .then((data) => posts = data)

        return posts;
    }
}
export  default PostApi;
