import { useEffect, useState } from "react";
import MainSection from "../../components/ui/userComponent/mainSection"
import Homepage from "../../layouts/homepage/index"
import { postType } from "../../util/types";
import axios from "axios";

export default function index() {
    const [AllPosts, setAllPost] = useState<Array<postType>>([])

    const user_id = "64adf95e3df9781ce07e75e0";



    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/post/`, {
                    params: {
                        user_id: `${user_id}`
                    }
                }
                );
                setAllPost(response.data);
            } catch (error) {
                throw error
            }
        }
        fetchPost();
    }, [])

    return (
        <div className="wrapper">
            <Homepage>
                <MainSection posts={AllPosts} />
            </Homepage>
        </div>
    )
}