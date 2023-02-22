// export class CommentApi {
//     constructor() {
//         this.comments =  this.#getComments();
//     }
//
//      async #getComments() {
//         let data = [];
//         // let index = -1;
//         // let result = [];
//         await fetch("http://jsonplaceholder.typicode.com/comments")
//             .then((res)=> {
//                 if(res.ok) {
//                     return res.json();
//                 } else {
//                     throw new Error(`Request status is ${res.status}`)
//                 }
//             })
//             .then((comments)=> {
//                 data = comments;
//                 // index = data.length;
//             })
//         //  console.log(data)
//         return data;
//         //
//         //  while(index !== -1) {
//         //     console.log(index)
//         //     result = result.concat(data[index])
//         //     index--;
//         //  }
//         //  console.log(result)
//
//     }
//
//      getCommentsByPostId(id) {
//         return  this.comments
//         // let author = null;
//         // await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
//         //     .then((res)=>{
//         //         if(res.ok) {
//         //             console.log(res.json())
//         //             return res.json();
//         //         } else {
//         //             throw new Error(`Request status is ${res.status}`)
//         //         }
//         //     })
//         //     .then((user)=> author = user)
//         // return author;
//
//         //
//         // if(id > 1 && id <= 20) {
//         //     return this.comments[0].filter((comment)=> comment.postId === id);
//         // } else if(id > 20 && id <= 40) {
//         //     return this.comments[1].filter((comment)=> comment.postId === id);
//         // }
//     }
// }

export async function getAllComments() {
    let data = null;
    await fetch("http://jsonplaceholder.typicode.com/comments")
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
