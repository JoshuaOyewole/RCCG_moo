import { useEffect, useState } from "react"
import axios from "axios"
import PostStyles from "../../../components/ui/createPost/_createpost.module.scss"
import CreatePost from "../createPost/createPost"
import Post from "../post/post"
import Modal from "../createPost/Modal"
import axiosClient from "../../../config/axios"

type MainSection = {
  iconClassName?: string
}

type post = {
  _id: string;
  creator: {
    id: string,
    name: string,
    profilePicture: string
  },
  createdAt: string,
  photos: string[],
  post_description: string,
  time_posted: string,
}


const MainSection = (props: MainSection) => {
  const [posts, setPost] = useState<Array<post>>([])

  const user_id = "64adf95e3df9781ce07e75e0";

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/post/${user_id}`
      );
      setPost(response.data);
      console.log(response.data);
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    /* FETCH post FROM API */


    fetchPost();
  }, [])



  return (
    <>
      {/* USER INFO BOXES */}
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