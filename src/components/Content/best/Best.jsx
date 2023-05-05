import { useEffect, useState } from "react"
import Comments from "../comments/comments"
import OpenPost from "../openPost/openPost"
import { get_comments } from "../../../api/api"


function Best(props) {
    let [comment_text, set_comment_text] = useState("")
    let [data, set_data] = useState([])
    useEffect(() => {
        get_comments(10).then((response) => {//ответ от сервера
            console.log(response)
            set_data(response.data)
        })

    }, [])
    function add_comment() {
        let new_post = [{ postId: 1, body: comment_text, name: "rony", email: "test_proecta@mail.ru" }]
        set_data([...new_post, ...data])
        set_comment_text("")
    }
    return (
        <div >
            <OpenPost comment_text={comment_text} set_comment_text={set_comment_text} add_comment={add_comment} />
            <Comments data={data} />
        </div>
    )
}
export default Best