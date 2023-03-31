import { useEffect, useState } from "react"
import Post from "../../Post/Post"


function Hot(props) {
    let [post_data, set_post_data] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(json => set_post_data(json))
    })

    return (
        <div >
            {post_data.map((el) => <Post author={el.userId} title={el.title} content={el.body} key={el.id} />)}
        </div>
    )
}
export default Hot
