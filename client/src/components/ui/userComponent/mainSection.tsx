import PostStyles from "../../../components/ui/createPost/_createpost.module.scss"
import CreatePost from "../createPost/createPost"
import Post from "../post/post"
import Modal from "../createPost/Modal"
import { postType } from "../../../util/types"


type mainSectionType = {
  posts:postType[]
}

const MainSection = ({posts}:mainSectionType) => {


  return (
    <>
      <Modal />
      <div className={PostStyles.post__create_postContainer}>
        <CreatePost />
      </div>
      <div className={PostStyles.post__posts_container}>
         {
          posts.map((post, index) => {
            return <Post
              key={index}
              post_desc={post.post_description}
              postID={post._id}
              username={post.creator.name}
              timeposted={post.time_posted}
              userImg={post.creator.profilePicture}
              photos={post.photos}
            />
          })
        } 
      </div>



    </>
  )
}

export default MainSection