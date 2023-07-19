import InfiniteScroll from 'react-infinite-scroll-component';
import PostStyles from "../../../components/ui/createPost/_createpost.module.scss"
//import Post from "../post/post"
import Modal from "../createPost/Modal"
import { postType } from "../../../util/types"
import { useState, useEffect } from "react"
import axios from "axios"
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import { getUserDatas } from '../../../util/auth';


const MainSection = () => {
  const [posts, setPost] = useState<Array<postType>>([]);
  const [page, setPage] = useState(1);
  dayjs.extend(relativeTime);

  let { token, user_id } = getUserDatas()

  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://dixre-api.onrender.com/post/`,
        {
          params: {
            user_id: `${user_id}`,
            page,
            limit: 10
          },
          headers: {
            Authorization: `Bearer ${token}`
          },
        });

      setPost((prev: postType[]) => {
        return [...prev, ...response.data.data];
      });
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchPost();
  }, [page])

  return (
    <>
      <Modal />
      <div className={PostStyles.post__posts_container}>
        <InfiniteScroll
          dataLength={posts.length}
          next={() => setPage(prev => prev + 1)}
          hasMore={true} // Set to false when there's no more data to load
          loader={<h4>Loading...</h4>} // Custom loading component
          endMessage={<p>No more items to load</p>} // Message when there's no more data
        >
          {
            posts.map((post, index) => {

              return <div className={PostStyles.post__post} key={index}>
                {/* Header */}
                <div className={PostStyles.post__post_header}>
                  <img src={post.creator.profilePicture == undefined ? " " : post.creator.profilePicture} className={PostStyles.post__user_pixs} alt={post.creator.name} />
                  <div className={PostStyles.post__post_info}>
                    <p className={PostStyles.post__user_name}>{post.creator.name}</p>
                    <p>{dayjs(post?.time_posted).fromNow()}</p>
                  </div>
                </div>
                {/* Description */}
                <span>
                  <p id={post?._id}>
                    {post?.post_description}
                  </p>
                  <p className={PostStyles.post__seeMoreBtn}>See more</p>
                </span>

                {/* Photos */}
                <div className={PostStyles.post__post_photos}>
                  {
                    post.photos.map((photo, index) => {
                      return <div className={PostStyles.post__post_photoContainer} key={index}>
                        <img src={photo} alt={`${post.creator.name} photo`} />
                      </div>
                    })
                  }

                </div>
              </div>
            })
          }
        </InfiniteScroll>
      </div>



    </>
  )
}

export default MainSection