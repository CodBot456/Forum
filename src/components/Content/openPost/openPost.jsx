import { useState } from "react"
import Post from "../../Post/Post"
import style from "./openPost.module.css"

function OpenPost(props) {

    let [button_status, set_button_status] = useState(false)
    function comment(e) {
        if (props.comment_text.length > 5 && props.comment_text !== "") {
            set_button_status(true)
        }
        else {
            set_button_status(false)
        }
        props.set_comment_text(e.currentTarget.value)

    }
    return (
        <div>
            <Post author="Bob" title="Хитрость11⁠⁠" content="А что так можно было?" key="1" />
            <div className={style.comments_form}>
                <textarea name="" id="" cols="30" rows="10" value={props.comment_text} placeholder="Оставьте комментарий" onChange={(e) => comment(e)}></textarea>
                <button disabled={!button_status} onClick={() => props.add_comment()}>send</button>
            </div>
        </div>
    )
}
export default OpenPost