import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"


const PostContainer = () => {
    
    const {data:posts} = postAPI.useFetchAllPostsQuery(5)

    return (
        <div>
            <div>
                {posts && posts.map(post => 
                    <PostItem key={post.id} post={post}/>
                    )}
            </div>
        </div>
    )
}

export default PostContainer