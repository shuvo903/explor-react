import { use } from "react"
import Post from "./post";
export default function Posts({postsPromise}){
const post = use(postsPromise);
console.log(post);
    return(
        <div className="card">
            <h2>All posts are here: {post.length}</h2>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}