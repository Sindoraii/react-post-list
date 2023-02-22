class PostApi {
    async getPosts() {
        let posts = null;
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Request status is ${res.status}`)
                }
            })
            .then((data) => posts = data)
        return posts;
    }

    async getPostById(id) {
        let post = null;
         await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=> {
               if(res.ok) {
                   return res.json()
               } else {
                   throw new Error(`Request status is ${res.status}`)
               }
            })
            .then((data)=> post = data)
        return post;
    }
}
export  default PostApi;
