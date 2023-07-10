import React, { useEffect, useState } from "react"
import axios from "axios"
import PostStyles from "../../../components/ui/createPost/_createpost.module.scss"
import CreatePost from "../createPost/createPost"
import Post from "../post/post"
import Modal from "../createPost/Modal"



type MainSection = {
  iconClassName?: string
}

type post = {
  id: number;
  accountBalance: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string
}


const MainSection = (props: MainSection) => {
  const [post, setPost] = useState<Array<post>>([])


  /* FETCH post FROM API */
  const fetchPost = async () => {
    try {
      const response = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/Dixre/api/v1/users");
      setPost(response.data);
      localStorage.setItem("post", JSON.stringify(response.data));
    } catch (error) {
      throw error
    }
  }


  useEffect(() => {
    //Fetch post data stored in localStorage
    const getpost = localStorage.getItem("post");

    if (getpost != null) {
      setPost(JSON.parse(getpost));

    } else {
      fetchPost();
    }
  }, [])



  return (
    <>
      {/* USER INFO BOXES */}
      <Modal />
      <div className={PostStyles.post__create_postContainer}>
        <CreatePost />
      </div>
      <div className={PostStyles.post__posts_container}>
        <Post postID="u8ue24" username="Joshua M. Oyewole" timeposted="6hr ago" userImg="src/assets/images/profilePixs.png"/>
        <Post postID="u8ue24" username="Felix S Temidayo" timeposted="4hr ago" userImg="src/assets/images/profilePixs.png"/>
        <Post postID="u8ue24" username="Felix S Temidayo" timeposted="4hr ago" userImg="src/assets/images/profilePixs.png"/>
        <Post postID="u8ue24" username="Felix S Temidayo" timeposted="4hr ago" userImg="src/assets/images/profilePixs.png"/>
      </div>



    </>
  )
}

export default MainSection