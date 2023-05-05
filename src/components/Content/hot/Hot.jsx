import { useEffect, useState } from "react"
import Post from "../../Post/Post"
import { get_posts, get_users } from "../../../api/api"


function Hot(props) {
    let [post_data, set_post_data] = useState([])
    let [limit, set_limit] = useState(10)
    useEffect(() => {
        get_posts(limit).then((response) => {
            set_post_data(response.data)
        })
        // useEffect   
    }, [])
    useEffect(() => {
        get_users().then((response) => {
            console.log(response)
        })
    }, [])
    // догружаем новые посты
    // function reload_posts() { 
    //     set_limit(limit + 1)
    //     get_posts(limit).then((response) => {
    //         set_post_data(response.data)
    //     })
    // }

    return (
        <div >
            {/* <button onClick={() => reload_posts()}>+</button> */}
            {post_data.map((el) => <Post author={el.userId} title={el.title} content={el.body} key={el.id} />)}
        </div>
    )
}
export default Hot
