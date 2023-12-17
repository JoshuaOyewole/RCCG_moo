import InfiniteScroll from 'react-infinite-scroll-component';
import PostStyles from "../../../components/ui/createPost/_createpost.module.scss"
import Loading from '../loadingSpinner/loading';
import Modal from "../createPost/Modal"
import { postType } from "../../../util/types"
import { useState, useEffect } from "react"
import axios from "axios"
import dayjs from 'dayjs';
const env = import.meta.env;
import relativeTime from "dayjs/plugin/relativeTime";
import { getUserDatas } from '../../../util/auth';
import Post from '../post/post';


const MainSection = () => {
  // State to hold your data and trigger infinite scroll
  const [data, setData] = useState<postType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  dayjs.extend(relativeTime);

  // Function to simulate loading more data (replace with your API call)
  const fetchMoreData = async () => {
    let { token, user_id } = getUserDatas()

    try {
      const response = await axios.get(`${env.VITE_API_URL}/post?user_id=${user_id}&page=${currentPage}&limit=10`,
        { headers: { Authorization: `Bearer ${token}` }, });

      const newData: postType[] = response.data.allPosts; // Assuming the API response contains an array of items
console.log(newData);

      // If newData is empty, there are no more items to load
      if (newData.length === 0) {
        setHasMore(false);
      } else {

        setData((prevData) => [...prevData, ...newData]);
        setCurrentPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasMore(false); // Disable infinite scroll on error
    }
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchMoreData();
  }, []);

  console.log(data);

  return (
    <>
      <Modal />
      <div className={PostStyles.post__posts_container}>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={<p>No more items to load.</p>}
        >

          {data.map((item, index) => (
            <Post
              postID={item._id}
              username={item.creator.name}
              userImg={item.creator.profilePicture}
              timeposted={item.time_posted}
              post_desc={item.post_description}
              photos={item.photos}
              key={index}
            />
          ))}
        </InfiniteScroll>
      </div>



    </>
  )
}

export default MainSection