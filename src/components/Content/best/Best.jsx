import { useEffect, useState } from "react"
import Comments from "../comments/comments"
import OpenPost from "../openPost/openPost"


function Best(props) {
    let [comment_text, set_comment_text] = useState("")
    let [data, set_data] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            .then(response => response.json())
            .then(json => set_data(json))
    })
    function add_comment() {
        alert("gooood")
    }
    return (
        <div >
            <OpenPost comment_text={comment_text} set_comment_text={set_comment_text} add_comment={add_comment} />
            <Comments data={data} />
        </div>
    )
}
export default Best